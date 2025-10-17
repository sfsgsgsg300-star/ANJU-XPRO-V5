//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0QyRzJMK05jN2lreHNQM2w4WXJFaVJzU3o0TDRzaHQ2VFRmdnRDd01rWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1JFcTFWNGJOZnJsNFZRcUhIN2pjUkFHRU1CMzNITDdRZHMvaThyZjF3UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QjR5THg1eE4vaXI2eHdJaGt0SlhXVEtPUHk2RE4yTnJ1SHV6MXByL0cwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1cCtkY05uaGhMZzhKRmd6TWliUmpsYTZPSytuTDFTSlZUOVg2dHlIYWtBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhLMUdiaitBMStMeUx0U0FrTDkzaG1nQXpsYnJFZVMvdDlUczRTUVQ0R289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9qeVlDVDZSaVRhOGVTOHFxL29QbUlMRE03R0Q3eXdnNW5naG9XMGlzVlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhLaE1DNUh4bXBFRXJRazBPZU5kQUZ2Uk9XOTJJcVBLeUJ1U3VDM0NXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1lieWZRWExldG4wSExlalg5ZEhBTkNjenpzZWtmKzBCdzk0bmcxc2hBaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBHenNZRzA5S3kybEVka0xIWlhOZjlSV1RaYXBHOHRERDJldE1QUnEyQU1BU2NCTlNBNGEyRExoRWMzNyszL1lVUFcxazFjVFJhSHF1Q3dtTm5IMGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ5LCJhZHZTZWNyZXRLZXkiOiJGTnhIR0hXRTNkNDJNV1NTYlQ0N1JzbHlGanE0OWJ6elpPWUZyaW5rQ25FPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyMDQ0NDEwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1QTIxNkIzQzFCQkU4N0FEQTlGNTA5NTVBRThBQzg4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjA2ODYxNzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyMDQ0NDEwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1M0VFODk2MEE0REE4QjJDRDQ5NERBNkUwQUVENEQxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjA2ODYxNzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyMDQ0NDEwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1QkE2OEQ5NkNEMTgwNjNFQUYwMjM3NzlGMEY4QUYyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjA2ODYxNzh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZTeFZRYjlEVEttM3hsaVBZTjh1b1EiLCJwaG9uZUlkIjoiMmYxODFiYTYtZjIyMy00MDBmLWE3ZmItNTJmNWE1NDU2MGFlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVKM29oVGpRSGVSR0UyRTlKSmtEcXYweVZCRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJubDdnRzBxcFJGSFBjUWc0a3pCMzAwbDRJWGc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMlZZNjk4ODMiLCJtZSI6eyJpZCI6Ijk0NzYyMDQ0NDEwOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiYW1hbGlrcmlzaGFudGhpIiwibGlkIjoiNTg4NjMyODE3Nzg4NjE6MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BHOHp2UUhFTkhneDhjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkhyTjdQM2QzYjJkeEJxTU83UGxpSG5kMVdaNm5COC9xblZrS2svaGt0MFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZuMlFWN3B2TFIrcTZrcCtjbXp1VDJWcjNTbEhiWjkydnFVMlNHN05jbDVPS2h2S2FjblJEb0hDbFltWC9FRjRmenUvTnFISW5CU3d5MTVjLzdPZER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6a0hKSkV5Uk02bW51YXlQUlZFYUpMd0lwZHllZ1E1TDE4Y0hBaFFqWjcza2MxUWxPNEVRRURJamI5dmNJS1UwQnFtSEVCVzV3Zy90ckZxOFBTQ0ZnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYyMDQ0NDEwOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUjZ6ZXo5M2QyOW5jUWFqRHV6NVloNTNkVm1lcHdmUDZwMVpDcFA0WkxkRSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYwNjg2MTc0LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGxCIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94762044410",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
