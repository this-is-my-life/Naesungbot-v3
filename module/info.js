import { CommandClient, Message } from 'eris';
import config from './data/config.json';
import error from './data/error.json';

export class Chat {
    client;
    constructor(client) {
        this.client = client;
    }

    async ping(msg) {
        msg.channel.createMessage({
            embed: {
                title: ':ping_pong:  퐁!',
                description: this.client.shards.get(0)?.latency + "ms가 소요됩니다.",
                color: config.color
            }
        });
    }

    async user(msg, args) {
        const senduserinfo = (user) => {
            msg.channel.createMessage({
                embed : {
                    title: 'User Infomation',
                    description: user.username + '의 정보입니다./n',
                    fields: [
                        {name : 'Name', value : user.username},
                        {name : 'Nickname', value : user.nick},
                        {name : 'ID', value : user.id},
                        {name : 'Bot', value : user.bot},
                        {name : 'Discord ID', value : user.username+'#'+user.discriminator},
                        {name : 'Created Date', value : user.createdAt},
                        {name : 'Premium', value : user.premiumSince},
                        {name : 'Status', value : user.cilentStatus},
                        {name : 'Action', value : user.activities},
                        {name : 'Voice Status', value : user.voiceStatus},
                        {name : 'Guild', value : user.guild},
                        {name : 'Joined Date', value : user.joinedAt},
                        {name : 'Role', value : user.roles},
                        {name : 'Permission', value : user.permission},
                    ],
                    color: config.color,
                    footer: {
                        text : 'Copyright 2020 Naesungbot, All Rights Reserved'
                    },
                    thumbnail: {
                        url: user.dynamicAvatarURL('png')
                    },
                    timestamp: new Date()
                }
            })
        if (args.length === 1) {
            let user = msg.author;
            senduserinfo(user);
        }
        else if (args.length === 2) {
            let user = guild.members.get(msg.mentions[0].id);
            senduserinfo(user);
        }
        else {
            msg.createMessage('Too many factors.');
        }
        }      
    }

    async avatar(msg, args) {
        const sendavatar = (user) => {
            msg.channel.createMessage({
                embed : {
                    title : 'User Avatar',
                    description : user.username + '의 아바타입니다./n',
                    fields : [
                        {name : 'link', value : user.defaultAvatarURL}
                    ],
                    footer : {
                        text : 'Copyright 2020 Naesungbot, All Rights Reserved',
                    },
                    thumbnail: {
                        url: user.dynamicAvatarURL('png')
                    },
                    timestamp: new Date()
                }
            })
        }
        if (args.length === 1) {
            let user = msg.author;
            sendavatar(user);
        }
        else if (args.length === 2) {
            let user = guild.members.get(msg.mentions[1].id);
            sendavatar(user);
        }
        else {
            msg.createMessage('Too many factors.');
        }
    }

    async channel(msg) {
        msg.channel.createMessage({
            embed : {
                title : 'Channel Info',
                description : 'Infomation of this channel',
                fields : [
                    {name : 'Type', value : msg.channel.type},
                    {name : 'Creation Date', value : msg.channel.createdAt},
                    {name : 'ID', value : msg.channel.id}
                ],
                footer : 'Copyright 2020 Naesungbot, All Rights Reserved\nBusan Metropolitan City, Republic of Korea',
                timestamp: new Date(),
                thumbnail: {
                    url: user.dynamicAvatarURL('png')
                }
            }
        })
    }

    async server(msg) {
        msg.channel.createMessage({
            embed : {
                title : 'Server Info',
                description : 'Infomation of server',
                fields : [
                    {name : 'Name', value : msg.guild.name},
                    {name : 'Server ID', value : msg.guild.id},
                    {name : 'Owner ID', value : msg.guild.ownerID},
                    {name : 'Creation Date', value : msg.guild.createdAt},
                    {name : 'Region', value : msg.guild.region},
                    {name : 'Number of Member', value : msg.guild.memberCount},
                    {name : 'Number of Channel', value : msg.guild.channels.size},
                    {name : 'Number of Voice Channel', value : msg.guild.voiceStates.size},
                    {name : 'Number of Role', value : msg.guild.roles.size},
                    {name : 'System Message Channel', value : msg.guild.systemChannelID},
                    {name : 'Preferred Locale', value : msg.guild.preferredLocale},
                    {name : 'Verification Level', value : msg.guild.verificationLevel},
                    {name : 'Nitro Tier', value : msg.guild.premiumTier},
                    {name : 'Number of Nitro Boosting User', value : msg.guild.premiumSubscriptionCount},
                    {name : 'Verification Level', value : msg.guild.verificationLevel},
                    {name : 'mfaLevel', value : msg.guild.mfaLevel},
                    {name : 'Explicit Content Filter Level', value : msg.guild.explicitContentFilter},
                    {name : 'Default Notification Setting', value : msg.guild.defaultNotifications},
                ],
                footer : {
                    text : 'Copyright 2020 Naesungbot, All Rights Reserved\nBusan Metropolitan City, Republic of Korea'
                },
                timestamp: new Date(),
                thumbnail: {
                    url: user.dynamicAvatarURL('png')
                }
            }
        })
    }

    async role(msg, args) {
        const sendroleinfo = (role) => {
            msg.channel.createMessage({
                embed : {
                    title : 'Role Infomation',
                    description : 'Infomation of User',
                    fields : [
                        {name : 'Name', value : msg.role.id},
                        {name : 'Color', value : msg.role.color},
                        {name : 'Role ID', value : msg.role.id},
                        {name : 'Position', value : msg.role.position},
                        {name : 'Guild', value : msg.role.guild.name},
                        {name : 'Creation Date', value : msg.role.createdAt},
                        {name : 'Permission', value : msg.role.permission.allow},
                    ],
                    footer : {
                        text : 'Copyright 2020 Naesungbot, All Rights Reserved',
                    },
                    thumbnail: {
                        url: user.dynamicAvatarURL('png')
                    },
                    timestamp: new Date()
                }
            })
        let role = msg.guild.roles.get(msg.mentions[1].id) || msg.guild.roles.find(role => role.name === args[1]);
        if (!role) {
            msg.channel.createMessage('Please type n!role @mention')
        }
        sendroleinfo()
        }
    }

    async bot(msg) {
        msg.channel.createMessage({
            embed : {
                title : 'Bot Information',
                description : 'Information of Naesungbot',
                fields : [
                    {name : 'Uptime', value : this.client.uptime},
                    {name : 'Number of Guild', value : this.client.guilds.size},
                    {name : 'Number of User(All)', value : this.client.users.size},
                    {name : 'Number of User', value : client.users.filter(a => a.bot === false).size},
                    {name : 'Number of Bot', value : this.client.users.filter(a => a.bot === true).size},
                    {name : 'Place', value : 'Busan, South Korea'}
                ],
                footer : {
                    text : 'Copyright 2020 Naesungbot, All Rights Reserved',
                },
                thumbnail: {
                    url: user.dynamicAvatarURL('png')
                },
                timestamp: new Date()
            }
        })
    }

    async userlist(msg, args) {        
        try {
        const userlist = (members) => {
            let str = '';
            for(const member of members.values()) {
                str += member.username+'#'+member.discriminator;
            }
            return str;
        }
            //봇 구분하는건 알아서 만드어보세용
            if (args[0] === 'bot') {
                    await msg.channel.createMessage({
                        embed : {
                            title : 'Userlist of Bot',
                            description : 'Infomation Including Bot Users',
                            fields : [
                                // 이 코드 백퍼 에러남 docs 찾아봄
                                {name : 'Userlist', value : userlist(msg.client.members)}
                            ],
                            footer : {
                                text : 'Copyright 2020 Naesungbot, All Rights Reserved',
                            },
                            thumbnail: {
                                url: user.dynamicAvatarURL('png')
                            },
                            timestamp: new Date()
                        }
                    })
            } else {
                await msg.channel.createMessage({
                    embed : {
                        title : 'Userlist',
                        description : 'Infomation Including Guild Users',
                        fields : [
                            {name : 'Userlist', value : userlist(msg.client.members)}
                        ],
                        footer : {
                            text : 'Copyright 2020 Naesungbot, All Rights Reserved',
                        },
                        thumbnail: {
                            url: user.dynamicAvatarURL('png')
                        },
                        timestamp: new Date()
                    }
                })
            }
        } catch(err) {
            msg.channel.createMessage({
                embed: {
                    title: 'Error. You made the error! Congratulations!' 
                }
            })
        }
    }

    async datalist(msg) {
        let files = filehandler.getFileList();
        for (let file of files) {
            msg.channel.createMessage(file);
            //아 ㅆ filehandler 없다...
        }
    }
}