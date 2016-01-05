Meteor.startup(function(){
  TrueVault.config({
    API_KEY: Meteor.settings.truevault.api_key,
    VAULT_ID: Meteor.settings.truevault.vault_id
  });
});

// Add a default record to be stored on TrueVault after a user is created
Accounts.onCreateUser(function (options, user) {
  TrueVault.insert({
    default: "Default Value"
  }, user._id);

  // Keep the default hook's 'profile' behavior.
  if (options.profile){
    user.profile = options.profile;
  }
  return user;
});