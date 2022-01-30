const client = global.client;

module.exports = async () => {
  client.guilds.cache.forEach(async (guild) => {
    const invites = await guild.fetchInvites();
    client.invites.set(guild.id, invites);
  });
  client.user.setActivity("");
  console.log(client.user.tag)
      let botVoiceChannel = client.channels.cache.get("");
  if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));
};

module.exports.conf = {
  name: "ready",
};
