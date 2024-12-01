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
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_54_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExLFxuICAgICAgICA4NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODMsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwLFxuICAgICAgICA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkyLFxuICAgICAgICA0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMzLFxuICAgICAgICAyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDksXG4gICAgICAgIDc0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM1LFxuICAgICAgICA3NixcbiAgICAgICAgMTc5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYxLFxuICAgICAgICA5MixcbiAgICAgICAgMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODksXG4gICAgICAgIDE5LFxuICAgICAgICAxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhQU1RyaUxBWmxmVFpiZ2xQT3Ztbm5YZURQVmdsRHZtMENMaE5BbDFZQ3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInd3TjVqclNOVGxTVFNPc3FmYTFUVEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDEyNmQ1MjUtN2E2Zi00MzYxLWJjOTgtMGZkYjQxMDUzMzJjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOSxcbiAgICAgIDIyOCxcbiAgICAgIDEyMyxcbiAgICAgIDE2NyxcbiAgICAgIDE1MyxcbiAgICAgIDE4NixcbiAgICAgIDE1NyxcbiAgICAgIDE4MixcbiAgICAgIDE1NyxcbiAgICAgIDEzOCxcbiAgICAgIDE4MixcbiAgICAgIDExMyxcbiAgICAgIDE3NCxcbiAgICAgIDIwLFxuICAgICAgMjM2LFxuICAgICAgMTc1LFxuICAgICAgMjUyLFxuICAgICAgMjE1LFxuICAgICAgMTk2LFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgMjIzLFxuICAgICAgMjIsXG4gICAgICAxMjUsXG4gICAgICAyMDAsXG4gICAgICAxODMsXG4gICAgICAxODMsXG4gICAgICAzMixcbiAgICAgIDQ3LFxuICAgICAgOTAsXG4gICAgICAxODEsXG4gICAgICA2MyxcbiAgICAgIDIwNCxcbiAgICAgIDI2LFxuICAgICAgMjE0LFxuICAgICAgNDQsXG4gICAgICA5NyxcbiAgICAgIDEsXG4gICAgICAyNSxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGRVg0NFZES1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0NTYxMzQzOTo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIyMzA4MzAzNzk0MzUxOjc5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05id2pwc0ZFUDI3cjdvR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTGRVWk5oQ3RUSUl3ZnZISzd4b0R3Mm9yV002Y3cyY3QvOUVPeHRCOWpHYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3ck1vVnU0bUZJQzc3SFFFd2Qrdk1HUTIvY0VxVUk1VVFpNWdCQzB6aFVON3p2SXNPL3ZiUU1tZzBhOHlHVkJNRkFBUVhmSytIa0RzOENiQ0VaTmdDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZYU04YmRxMndGN21taFdENTlVek53M2JFWHlFVktyWnY3SUZ2aWhYK0hHeTU1QkxiSTNydmxUOWY0TVZNVXQwd01sVERhY3lRbllpRmJFNGRRb3BEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQ1NjEzNDM5Ojc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMwMjUyODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKd0VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp3RS5qc29uIjogIntcImtleURhdGFcIjpcIk1WUEJILzl4SWdudE91Wnc1L0ZDditrVUlYRVNESzVCdW85MWdaanNuOEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM5OTA0NDE4MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
