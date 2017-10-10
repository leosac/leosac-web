import os
import sys
import json

print("This script will install and update the dependencies of the project, \
and then it will finally build the Leosac User Interface")

# Set the path to /leosac/leosac-web/web-service in our container

path = "/leosac/leosac-web/web-service/"
os.chdir(path)
addons_name = []


# Open the package.json of our app, and keep its data in  dictionary

with open('../package.json') as data_file:
    data = json.load(data_file)

# Open the build-config.json, in which there will be the informations of our application 
# for our package.json, router.js and app.js (and maybe config)

with open('build-config.json') as data_file:
    config_data = json.load(data_file)


# Add to our dictionary the in-repo addon 

in_repo_addon = []

for data_addon in config_data['addon']:
    in_repo_addon.append(data_addon)
    addons_name.append(data_addon)
    data['ember-addon']['paths'].append("lib/" + data_addon)


# Add to our dictionary the out-repo addon 

out_repo_addon = []

for data_addon in config_data['extern-addon']:
    out_repo_addon.append(data_addon)
    addons_name.append(data_addon)
    data['dependencies'][data_addon] =  '"' + '../leosac-web-addons/' + data_addon + '"'

# Recreate a writable package.json and put in it the dictionary that we previously completed 
# json.dumps() will take a dictionnary and change it to a string that it is put in the package.json

with open('../package.json', 'w') as data_file:
    data_file.write(json.dumps(data, sort_keys=True, indent=4))

# The We will now modify the app.js and router.js file

app_data = ''

# We will load the data in app.js, and complete it

with open('../app/app.js') as data_file:
    app_data = data_file.read()

data_dict = {}

addon_config = {}

# this will catch the config of each addon, which can be either in or out repo

for addon_name in out_repo_addon:
    with open('../../leosac-web-addons/'+ addon_name + '/module-config.json') as addon_open:
        addon_config[addon_name] = json.load(addon_open)

for addon_name in in_repo_addon:
    with open('../lib/'+ addon_name + '/module-config.json') as addon_open:
        addon_config[addon_name] = json.load(addon_open)

# This is a small function that will reformat the name of the addon.
# In our app.js, our addon name must be camel cased,
# while in our router.js and package.json the name must be dasherized

def formatRouteName(st):
    output = ''.join(x for x in st.title() if x.isalpha())
    return output[0].lower() + output[1:]

# We will create a dictionary for each module, based on a blue print.

for data in addons_name:
    route_name = formatRouteName(data)
    data_dict[route_name] = {
        'leosacProperty': {
            'needServer': addon_config[data]['needServer'],
            'displayName': addon_config[data]['displayName']
        },
        'dependencies': {
            'externalRoutes': {
                'login': 'login'
            },
            'services': [
                'authentication',
                'websocket',
                'leosac-info',
                'flashMessages',    
                'store',
                'module-manager']
        }
    }

# Rewriting the app.js with the newly added dictionary
# There must be a "__REPLACE_ME__" because this will 

with open('../app/app.js', 'w') as data_file:
    app_data = app_data.replace("__REPLACE_ME__", json.dumps(data_dict, sort_keys=True, indent=4))
    data_file.write(app_data)