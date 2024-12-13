const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Goku-v2/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/us3p7j.jpeg" || "https://files.catbox.moe/n06s1s.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© ✞ꪻ᥇ꪮꪗ™" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349045613439";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/n06s1s.jpeg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_13_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgODUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMwLFxuICAgICAgICA2NixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQwLFxuICAgICAgICA2NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NCxcbiAgICAgICAgODksXG4gICAgICAgIDI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQwLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDgwLFxuICAgICAgICA0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk1LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDgxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICA3MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU5LFxuICAgICAgICA5OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc4LFxuICAgICAgICA2MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxLFxuICAgICAgICA2MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS1NkajltMjVTdUI5L2VhYThxL252S2E1dVhqVWhmS1l6OEVFTXd0ZlRjND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLVlDNkhTM2RSMG1vTDdETFJ5ZlFrUVwiLFxuICBcInBob25lSWRcIjogXCI1Y2QxZGY0OC00YjBiLTQ2NTEtOWFmMS02MTRhMTVmZmM3MGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODEsXG4gICAgICA1OCxcbiAgICAgIDIxMCxcbiAgICAgIDIxOCxcbiAgICAgIDI1NCxcbiAgICAgIDE2MSxcbiAgICAgIDEzNSxcbiAgICAgIDE2NyxcbiAgICAgIDM5LFxuICAgICAgMjA2LFxuICAgICAgMTEzLFxuICAgICAgMTA4LFxuICAgICAgMTA0LFxuICAgICAgMjUyLFxuICAgICAgNjMsXG4gICAgICA0NSxcbiAgICAgIDk1LFxuICAgICAgMjQyLFxuICAgICAgNjIsXG4gICAgICA3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICAyMzAsXG4gICAgICAyMzgsXG4gICAgICAyNTEsXG4gICAgICAxNTEsXG4gICAgICAxMjgsXG4gICAgICAyNSxcbiAgICAgIDIzOCxcbiAgICAgIDE3MixcbiAgICAgIDkwLFxuICAgICAgMjA2LFxuICAgICAgMTg1LFxuICAgICAgMjUsXG4gICAgICAyMDMsXG4gICAgICA3NSxcbiAgICAgIDMyLFxuICAgICAgMTkzLFxuICAgICAgMTM0LFxuICAgICAgMTA4LFxuICAgICAgNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1dYUFpOOTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTM1OTg3OTk6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCS8J2ar/CdkIrwnZCK8J2aq1wiLFxuICAgIFwibGlkXCI6IFwiMjIxNDk3MDAwNTExODg6MzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUtlczhVRkVKZTY4Ym9HR0I4Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsTm81d2lOUVliV210TVIxRURJT1VFdSs5Mk1xZ1Z1MWUwWU9uY3Y3VGx3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtLTnR0YkVpNzlWY2V6alYwYzBXYVJOYzlMU1lPK2c3TW8vZUZiK1g1ME1PTUlQb0JKMitBK3dwV2pvMVVtcWNXQjduak1sM3ZFWVJiUEZuWFRyeEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVKWnU1Snp1YWQ0R3UzaiswZnE5Mmc1RXRwMEVMQVczT05kTDhLUzN4L3dNcitXU1BUMXJtakJyd01naEhoWHNjdlZmNEczcVFIUkZlaHVOb1h6Q2dnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTM1OTg3OTk6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDEwNjM5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUovWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSi9YLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "✞ꪻ᥇ꪮꪗ™",
  ownername:process.env.OWNER_NAME|| "✞ꪻ᥇ꪮꪗ™",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "GOKU"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
