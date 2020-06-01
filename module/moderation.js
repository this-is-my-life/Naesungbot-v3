const { CommandClient, Message } = require('eris');
const config = require('./data/config.json');
const error = require('./data/error.json');
const administrator = require('./data/config.json');

export class Moderation {
    client;
    constructor(client) {
        this.client = client;
    }

    async admin(msg, args) {
        if (args[0] === 'add') {
            if (admin.checkUser(msg.author.id)) {
                let adminid = command.split(" ")[1];
                adminid.add(administrator);
                msg.channel.createMessage(blacklistid + 'cannot use this bot.');
            } else {
                msg.channel.createMessage(error.nopermission);
            }
        }
        if (args[0] === 'del') {
            if (admin.checkUser(msg.author.id)) {
                let notadminid = command.split(" ")[1];
                blacklist.remove(id);
                msg.channel.createMessage(notadminid + 'can use this bot!');
            } else {
                msg.channel.createMessage('You have no permission!');
            }
        }
        else {
            if (admin.checkUser(msg.author.id)) {
                msg.channel.createMessage('Admin');
            } else {
                msg.channel.createMessage(error.notadmin);
            }
        }
    }

    async blacklist(msg, args) {
        if (args[0] === 'add') {
            if (admin.checkUser(msg.author.id)) {
                let blacklistid = command.split(" ")[1];
                blacklist.add(blacklistid);
                msg.channel.createMessage(blacklistid + 'cannot use this bot.');
            } else {
                msg.channel.createMessage(error.nopermission);
            }
        }
        if (args[0] === 'del') {
            if (admin.checkUser(msg.author.id)) {
                let notblacklistid = command.split(" ")[1];
                blacklist.remove(id);
                msg.channel.createMessage(notblacklistid + 'can use this bot!');
            } else {
                msg.channel.createMessage(error.nopermission);
            }
        }
        else {
            if (admin.checkUser(msg.author.id)) {
                msg.channel.createMessage('blacklist: ');
                for (let id of blacklist.get()) {
                    msg.channel.createMessage(id);
                }
            } else {
                msg.channel.createMessage(error.nopermission);
            }
        }
    }

    async clear(msg, args) {
        let reason = args.join(' ').slice(2)
        if (!args[0]) return msg.channel.createMessage("Please write a number.");
        if (!reason) {
            msg.channel.purge(Number(args[0]) + 1).then(() => {
                msg.channel.createMessage({
                    embed : {
                        title : 'Purged!',
                        description : 'Naesungbot Successfully deleted ' + args[0] + ' messages',
                        fields : [
                            {name : 'Number', value : args[0]}
                        ],
                        color: config.color,
                        footer: {
                            text : 'Copyright 2020 Naesungbot, All Rights Reserved\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                        },
                        thumbnail: {
                        url: user.dynamicAvatarURL('png')
                        },
                        timestamp: new Date()
                    }
                });
            });
        } else {
            msg.channel.purge(Number(args[0]) + 1, reason).then(() => {
                msg.channel.createMessage({
                    embed : {
                        title : 'Purged!',
                        description : 'Naesungbot Successfully deleted ' + args[0] + ' messages',
                        fields : [
                            {name : 'Number', value : args[0]},
                            {name : 'Reason', value : reason}
                        ],
                        color: config.color,
                        footer: {
                            text : 'Copyright 2020 Naesungbot, All Rights Reserved\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                        },
                        thumbnail: {
                            url: user.dynamicAvatarURL('png')
                        },
                        timestamp: new Date()
                    }
                })
            })
        }
    }

    async ban(msg, args) {
        let bannedUser = guild.members.get(msg.mentions[0].id);
        let deleteMessageDays = args.join(' ').slice(2);
        let banReason = args.join(' ').slice(3);
        if (!args[0]) return msg.channel.createMessage("Please mention user to be banned after n!ban.");
        if (bannedUser.id === client.user.id) return
        if (!msg.member.permission('BAN_MEMBERS')) {
            msg.channel.createMessage({
                embed : {
                    title : 'No Permission!',
                    description : 'You lack the permission.',
                    fields : [
                        {name : 'Error', value : 'You lack the permission.'}
                    ],
                    color: config.color,
                    footer: {
                        text : 'Copyright 2020 Naesungbot, All Rights Reserved\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                    },
                    thumbnail: {
                        url: user.dynamicAvatarURL('png')
                    },
                    timestamp: new Date()
                }
            })
        } else {
            msg.channel.createMessage({
                embed : {
                    title : 'Banned User!',
                    description : 'Successfully banned user.',
                    fields : [
                        {name : 'Executed User', value : msg.author.name},
                        {name : 'Banned User', value : msg.mentions[0].name},
                        {name : 'Executed Time', value : msg.editedTimestamp},
                        {name : 'Deleted Days', value : deleteMessageDays},
                        {name : 'Executed Reason', value : banReason}
                    ],
                    color: config.color,
                    footer: {
                        text : 'Copyright 2020 Naesungbot, All Rights Reserved\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                    },
                    thumbnail: {
                        url: user.dynamicAvatarURL('png')
                    },
                    timestamp: new Date()
                }
            })
            msg.guild.banMember(bannedUser, deleteMessageDays, banReason)
        }
    }

    async unban(msg, args) {
        let unbannedUser = guild.members.get(msg.mentions[0].id);
        let unbanReason = args.join(' ').slice(2);
        if (!args[0]) return msg.channel.createMessage("Please mention user to be banned after n!unban.");
        if (unbannedUser.id === client.user.id) return
        if (!msg.member.permission('BAN_MEMBERS')) {
            msg.channel.createMessage({
                embed : {
                    title : 'No Permission!',
                    description : 'You lack the permission.',
                    fields : [
                        {name : 'Error', value : 'You lack the permission.'}
                    ],
                    color: config.color,
                    footer: {
                        text : 'Copyright 2020 Naesungbot, All Rights Reserved\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                    },
                    thumbnail: {
                        url: user.dynamicAvatarURL('png')
                    },
                    timestamp: new Date()
                }
            })
        } else {
            msg.channel.createMessage({
                embed : {
                    title : 'Unbanned User!',
                    description : 'Successfully unbanned user.',
                    fields : [
                        {name : 'Executed User', value : msg.author.name},
                        {name : 'Unbanned User', value : msg.mentions[0].name},
                        {name : 'Executed Time', value : msg.editedTimestamp},
                        {name : 'Executed Reason', value : unbanReason}
                    ],
                    color: config.color,
                    footer: {
                        text : 'Copyright 2020 Naesungbot, All Rights Reserved.\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                    },
                    thumbnail: {
                        url: user.dynamicAvatarURL('png')
                    },
                    timestamp: new Date()
                }
            })
            msg.guild.unbanMember(unbannedUser, unbanReason)
        }
    }

    async kick(msg, args) {
        let kickedUser = guild.members.get(msg.mentions[0].id);
        let kickReason = args.join(' ').slice(2)
        if (!args[0]) return msg.channel.createMessage("Please mention user to be banned after n!kick.");
        if (kickedUser.id === client.user.id) return
        if (!msg.member.hasPermission("KICK_MEMBERS")) return;
        msg.member(kickedUser).kick(kickReason);
        msg.channel.createMessage({
            embed : {
                title : 'Kicked User!',
                description : 'Successfully kicked user.',
                fields : [
                    {name : 'Executed User', value : msg.author.name},
                    {name : 'Kicked User', value : msg.mentions[0].name},
                    {name : 'Executed Time', value : msg.editedTimestamp},
                    {name : 'Executed Reason', value : kickReason}
                ],
                color: config.color,
                footer: {
                    text : 'Copyright 2020 Naesungbot, All Rights Reserved\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                },
                thumbnail: {
                    url: user.dynamicAvatarURL('png')
                },
                timestamp: new Date()
            }
        });
    }
    
    async checker(msg) {
        if(msg.author.bot) return;
        else if(await(this.check_black(msg))) return;
        else if(!msg.member?.guild) {
            const message = await msg.channel.createMessage({
                embed: {
                    title: ":x: Error!",
                    description: "This command is only for server.",
                    color: 0xff0f0f,
                    footer: {
                        icon_url: this.client.users.get(config.owner)?.dynamicAvatarURL('png'),
                        text: 'Copyright 2020 Naesungbot, All Rights Reserved.\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                    }
                }
            });
            setTimeout(() => {
                message.delete();
            }, 5000);
            return false;
        }
        else return true;
    }

    async check_black(msg) {
        const db = this.db_obj();
        try {
            await db.connect();
            const ri = await db.query(`SELECT COUNT(*) AS cnt FROM user_blacklist WHERE id=$1`, [msg.author.id]);
            if(Boolean(ri.rows[0][0])) return true;
            else return false;
        } catch(err) {
            console.log(err);
        } finally {
            await db.end();
        }
    }

    async check_ad_guild(msg) {
        const id = msg.member?.guild.ownerID;
        if(!id) return;
        else {
            const rolecheck = (msg) => {
                const roles = msg.member?.roles;
                let bo = [];
                if(!roles) return;
                for(const r_role of roles) {
                    const role = msg.member?.guild.roles.get(r_role);
                    if(!role) return;
                    bo.push(role.permissions.has('administrator'));
                }
                return bo.includes(true);
            }

            if(!msg.member?.permission.has('administrator') || !rolecheck(msg)) {
                const message = await msg.channel.createMessage({
                    embed: {
                        title: ":x: Error occured!",
                        description: "You lack the permission.",
                        color: 0xff0f0f,
                        footer: {
                            icon_url: this.client.users.get(config.owner)?.dynamicAvatarURL('png'),
                            text: 'Copyright 2020 Naesungbot, All Rights Reserved.\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                        }
                    }
                });
                setTimeout(() => {
                    message.delete();
                }, 5000);
                return false;
            }
            else return true;
        }
    }
    
    check_role(msg, permissions) {
        const rol = msg.member?.roles;
        const guild = msg.member?.guild;
        if(!rol || !guild) throw 'No role, server available.';
        const channel = guild.channels.get(msg.channel.id);
        const over = channel?.permissionOverwrites;
        let bool = false;
        if(!over) throw '';
        for(const rolesid of rol) {
            const role = guild.roles.get(rolesid);
            for(const permission of permissions) {
                if(role?.permissions.has(permission)) bool = true;
                for(const _p of over) {
                    if(_p.includes(rolesid)) {
                        if(_p[1].has(permission)) bool = true;
                    }
                }
            }
        }
        return bool;
    }

    async mute(msg, args) {
        if(!await(this.checker(msg))) return;
        else {
            try {
                if(this.check_role(msg, ['administrator', 'kickMembers', 'banMembers'])) {
                    if(msg.mentions[0].id === this.client.user.id) throw 'You cannot kick or ban yourself.';
                    const channel = msg.member?.guild.channels.get(msg.channel.id);
                    if(!channel) throw 'No channel.';
                    let description = '';
                    for(var i = 1; i <= args.length-1; i++) description += args[i]+' ';
                    if(args.length <= 1) description = 'No reason';
                    if(channel.permissionsOf(msg.mentions[0].id).has('sendMessages')) {
                        channel.editPermission(msg.mentions[0].id, 0, 2048, 'member');
                        msg.channel.createMessage({
                            embed: {
                                title: ':white_check_mark: Successfully Muted!',
                                description: '해당 유저를 성공적으로 뮤트하였습니다!',
                                fields: [
                                    {name: 'User', value: msg.mentions[0].username+'#'+msg.mentions[0].discriminator},
                                    {name: 'Reason', value: description},
                                    {name: 'Commiter', value: msg.author.username+'#'+msg.author.discriminator}
                                ],
                                color: 0x25d219,
                                timestamp: new Date(),
                                thumbnail: {
                                    url: msg.mentions[0].dynamicAvatarURL('png')
                                }
                            }
                        });
                    } else {
                        channel.editPermission(msg.mentions[0].id, 2048, 0, 'member');
                        msg.channel.createMessage({
                            embed: {
                                title: ':white_check_mark: Successfully Unmuted!',
                                description: '해당 유저의 뮤트를 성공적으로 해제하였습니다!',
                                fields: [
                                    {name: 'User', value: msg.mentions[0].username+'#'+msg.mentions[0].discriminator},
                                    {name: 'Reason', value: description},
                                    {name: 'Committer', value: msg.author.username+'#'+msg.author.discriminator}
                                ],
                                color: 0x25d219,
                                timestamp: new Date(),
                                thumbnail: {
                                    url: msg.mentions[0].dynamicAvatarURL('png')
                                }, 
                                footer: {
                                    icon_url: this.client.users.get(config.owner)?.dynamicAvatarURL('png'),
                                    text: 'Copyright 2020 Naesungbot, All Rights Reserved.\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                                }
                            }
                        });
                    }
                } else throw '권한이 없습니다. 관리자 권한이나 밴, 킥 권한이 있어야 해요!';
            } catch(err) {
                msg.channel.createMessage({
                    embed: {
                        title: ':x:  오류!',
                        description: '오류가 발생했습니다.',
                        color: 0xff0f0f,
                        fields: [
                            {name: 'report', value: '`'+err+'`'}
                        ],
                        footer: {
                            icon_url: this.client.users.get(config.owner)?.dynamicAvatarURL('png'),
                            text: 'Copyright 2020 Naesungbot, All Rights Reserved.\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                        }
                    }
                });
            } 
        }
    }

    async guildedit(msg, args) {
        if(!await(this.checker(msg))) return;
        else {
            try {
                if (args[0] === 'guildname') {
                    if(this.check_role(msg, ['administrator'])) {
                        const guild = msg.member?.guild
                        guild.edit([{name : args[1], reason : args[2]}])
                        msg.channel.createMessage({
                            embed : {
                                title : ':white_check_mark: Changed guildname!',
                                description : 'Successfully Changed guildname!',
                                color : 0xff0000,
                                fields : [
                                    {name : 'name', value : args[1]},
                                    {name : 'reason', value : args[2]}
                                ],
                                footer: {
                                    icon_url: this.client.users.get(config.owner)?.dynamicAvatarURL('png'),
                                    text: 'Copyright 2020 Naesungbot, All Rights Reserved.\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                                }
                            }
                        })
                    } else {
                        throw 'You have no permission to run command.'
                    }
                }
                else if(args[0] === 'region') {
                    if(this.check_role(msg, ['administator'])) {
                        const guild = msg.member?.guild
                        guild.edit([{region : args[1], reason : args[2]}])
                        msg.channel.createMessage({
                            embed : {
                                title : ':white_check_mark: Changed region!',
                                description : 'Successfully Changed region!',
                                color : 0xff0000,
                                fields : [
                                    {name : 'name', value : args[1]},
                                    {name : 'reason', value : args[2]}
                                ],
                                footer: {
                                    icon_url: this.client.users.get(config.owner)?.dynamicAvatarURL('png'),
                                    text: 'Copyright 2020 Naesungbot, All Rights Reserved.\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                                }
                            }
                        })
                    } else {
                        throw 'You have no permission to run command.'
                    }
                }
                else if(args[0] === 'verificationlevel') {
                    if(this.check_role(msg, ['administator'])) {
                        const guild = msg.member?.guild
                        guild.edit([{verificationLevel : args[1], reason : args[2]}])
                        msg.channel.createMessage({
                            embed : {
                                title : ':white_check_mark: changed verificationlevel!',
                                description : 'Successfully changed verificationlevel!',
                                color : 0xff0000,
                                fields : [
                                    {name : 'name', value : args[1]},
                                    {name : 'reason', value : args[2]}
                                ],
                                footer: {
                                    icon_url: this.client.users.get(config.owner)?.dynamicAvatarURL('png'),
                                    text: 'Copyright 2020 Naesungbot, All Rights Reserved.\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                                }
                            }
                        })
                    } else {
                        throw 'You have no permission to run command.'
                    }
                }
                else if(args[0] === 'explicitcontentfilter') {
                    if(this.check_role(msg, ['administator'])) {
                        const guild = msg.member?.guild
                        guild.edit([{explicitContentFilter : args[1], reason : args[2]}])
                        msg.channel.createMessage({
                            embed : {
                                title : ':white_check_mark: changed explicitContentFilter!',
                                description : 'Successfully changed explicitContentFilter!',
                                color : 0xff0000,
                                fields : [
                                    {name : 'name', value : args[1]},
                                    {name : 'reason', value : args[2]}
                                ],
                                footer: {
                                    icon_url: this.client.users.get(config.owner)?.dynamicAvatarURL('png'),
                                    text: 'Copyright 2020 Naesungbot, All Rights Reserved.\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                                }
                            }
                        })
                    } else {
                        throw 'You have no permission to run command.'
                    }
                }
                else if(args[0] === 'defaultnotifications') {
                    if(this.check_role(msg, ['administator'])) {
                        const guild = msg.member?.guild
                        guild.edit([{defaultNotifications : args[1], reason : args[2]}])
                        msg.channel.createMessage({
                            embed : {
                                title : ':white_check_mark: changed defaultNotifications!',
                                description : 'Successfully changed defaultNotifications!',
                                color : 0xff0000,
                                fields : [
                                    {name : 'name', value : args[1]},
                                    {name : 'reason', value : args[2]}
                                ],
                                footer: {
                                    icon_url: this.client.users.get(config.owner)?.dynamicAvatarURL('png'),
                                    text: 'Copyright 2020 Naesungbot, All Rights Reserved.\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                                }
                            }
                        })
                    } else {
                        throw 'You have no permission to run command.'
                    }
                }
                else if(args[0] === 'systemchannelid') {
                    if(this.check_role(msg, ['administator'])) {
                        const guild = msg.member?.guild
                        guild.edit([{systemChannelID : args[1], reason : args[2]}])
                        msg.channel.createMessage({
                            embed : {
                                title : ':white_check_mark: changed systemChannelID!',
                                description : 'Successfully changed systemChannelID!',
                                color : 0xff0000,
                                fields : [
                                    {name : 'name', value : args[1]},
                                    {name : 'reason', value : args[2]}
                                ],
                                footer: {
                                    icon_url: this.client.users.get(config.owner)?.dynamicAvatarURL('png'),
                                    text: 'Copyright 2020 Naesungbot, All Rights Reserved.\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                                }
                            }
                        })
                    } else {
                        throw 'You have no permission to run command.'
                    }
                }
                else if(args[0] === 'ruleschannelid') {
                    if(this.check_role(msg, ['administator'])) {
                        const guild = msg.member?.guild
                        guild.edit([{rulesChannelID : args[1], reason : args[2]}])
                        msg.channel.createMessage({
                            embed : {
                                title : ':white_check_mark: changed rulesChannelID!',
                                description : 'Successfully changed rulesChannelID!',
                                color : 0xff0000,
                                fields : [
                                    {name : 'name', value : args[1]},
                                    {name : 'reason', value : args[2]}
                                ],
                                footer: {
                                    icon_url: this.client.users.get(config.owner)?.dynamicAvatarURL('png'),
                                    text: 'Copyright 2020 Naesungbot, All Rights Reserved.\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                                }
                            }
                        })
                    } else {
                        throw 'You have no permission to run command.'
                    }
                }
                else if(args[0] === 'publicupdateschannelid') {
                    if(this.check_role(msg, ['administator'])) {
                        const guild = msg.member?.guild
                        guild.edit([{publicUpdatesChannelID : args[1], reason : args[2]}])
                        msg.channel.createMessage({
                            embed : {
                                title : ':white_check_mark: changed publicUpdatesChannelID!',
                                description : 'Successfully changed publicUpdatesChannelID!',
                                color : 0xff0000,
                                fields : [
                                    {name : 'name', value : args[1]},
                                    {name : 'reason', value : args[2]}
                                ],
                                footer: {
                                    icon_url: this.client.users.get(config.owner)?.dynamicAvatarURL('png'),
                                    text: 'Copyright 2020 Naesungbot, All Rights Reserved.\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                                }
                            }
                        })
                    } else {
                        throw 'You have no permission to run command.'
                    }
                }
                else if(args[0] === 'preferredlocale') {
                    if(this.check_role(msg, ['administator'])) {
                        const guild = msg.member?.guild
                        guild.edit([{preferredLocale : args[1], reason : args[2]}])
                        msg.channel.createMessage({
                            embed : {
                                title : ':white_check_mark: changed preferredLocale!',
                                description : 'Successfully changed preferredLocale!',
                                color : 0xff0000,
                                fields : [
                                    {name : 'name', value : args[1]},
                                    {name : 'reason', value : args[2]}
                                ],
                                footer: {
                                    icon_url: this.client.users.get(config.owner)?.dynamicAvatarURL('png'),
                                    text: 'Copyright 2020 Naesungbot, All Rights Reserved.\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                                }
                            }
                        })
                    } else {
                        throw 'You have no permission to run command.'
                    }
                }
                else if(args[0] === 'afkchannelid') {
                    if(this.check_role(msg, ['administator'])) {
                        const guild = msg.member?.guild
                        guild.edit([{afkChannelID : args[1], reason : args[2]}])
                        msg.channel.createMessage({
                            embed : {
                                title : ':white_check_mark: changed afkChannelID!',
                                description : 'Successfully changed afkChannelID!',
                                color : 0xff0000,
                                fields : [
                                    {name : 'name', value : args[1]},
                                    {name : 'reason', value : args[2]}
                                ],
                                footer: {
                                    icon_url: this.client.users.get(config.owner)?.dynamicAvatarURL('png'),
                                    text: 'Copyright 2020 Naesungbot, All Rights Reserved.\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                                }
                            }
                        })
                    } else {
                        throw 'You have no permission to run command.'
                    }
                }
                else if(args[0] === 'afkTimeout') {
                    if(this.check_role(msg, ['administator'])) {
                        const guild = msg.member?.guild
                        guild.edit([{afkTimeout : args[1], reason : args[2]}])
                        msg.channel.createMessage({
                            embed : {
                                title : ':white_check_mark: changed afkTimeout!',
                                description : 'Successfully changed afkTimeout!',
                                color : 0xff0000,
                                fields : [
                                    {name : 'name', value : args[1]},
                                    {name : 'reason', value : args[2]}
                                ],
                                footer: {
                                    icon_url: this.client.users.get(config.owner)?.dynamicAvatarURL('png'),
                                    text: 'Copyright 2020 Naesungbot, All Rights Reserved.\nIf you have problems, please contact 129.03#2446 or send mail to minseo0388@daum.net.\nSending email will be more faster.'
                                }
                            }
                        })
                    } else {
                        throw 'You have no permission to run command.'
                    }
                }
            } catch {
                throw 'Error'
            }
        }
    }
}