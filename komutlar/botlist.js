const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const db = require("nrc.db")
const {MessageActionRow, MessageButton} = require("discord.js")
module.exports = {
    calistir: async(client, message, args) => {

   
        const menu = new Discord.MessageEmbed()
        .setImage("https://c.tenor.com/WKWonIB6gjIAAAAC/police-siren-siren.gif")
        .setColor("RANDOM")
        .setTitle("BannerOffice Scammer İhbar Sistemi")
        .setDescription(`
        Dolandırıcı Bildirmek İçin Aşağıdaki Butona Basınız.`)

        const row = new MessageActionRow()
        .addComponents(
        new MessageButton()
        .setCustomId('bot-başvuru')
        .setLabel('Bildirmek İçin Tıkla')
        .setStyle('SECONDARY'),

        );
        message.channel.send({
            embeds: [menu], components: [row]
        });


},

name: "botlist",
description: "",
aliases: [],
kategori: "",
usage: "",
}