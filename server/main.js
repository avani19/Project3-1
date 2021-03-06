import { Meteor } from 'meteor/meteor';
import { BrowserPolicy } from 'meteor/browser-policy-common';
import { MeteorCameraUI } from 'meteor/okland:camera-ui'; //uploading profile image


Meteor.startup(() => {
  BrowserPolicy.content.allowOriginForAll('*');
  BrowserPolicy.content.allowImageOrigin("blob:");
  var constructedCsp = BrowserPolicy.content._constructCsp();
  BrowserPolicy.content.setPolicy(constructedCsp +" media-src blob:;");
  // code to run on server at startup

  // create admin from settings
  if (Meteor.users.findOne(Meteor.settings.adminId)){
    Roles.addUsersToRoles(Meteor.settings.adminId, ['admin']);
  }
  
});

Meteor.publish("polls", function () {
  return Polls.find();
});