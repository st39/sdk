// SN
document.addEventListener("DOMContentLoaded",function(){!function(e){var t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e));document.getElementsByTagName("head")[0].appendChild(t)}("#button {\n  display:none;\n}\n.imgb_vis {\n  animation: imgb-animation 7s linear;\n}\n@keyframes imgb-animation {\n  10% {\n    transform: translateX(0);\n  }\n  20% {\n    transform: translateX(100px);\n  }\n  90% {\n    transform: translateX(100px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}");var e=document.createElement("div");e.id="button",e.className="imgb",e.style="position:fixed;top:10%;left:-100px;z-index:10",e.innerHTML='<a target="_blank" href="https://sites.google.com/view/classroomed/" title="More Unblocked Games classroomed"><img src="https://lh4.googleusercontent.com/lUEWrXMVEr4AdjKISyJahDRJ61bwfvHdpeYm86Djn5U8oCm9dI60NGXSBqad9HUvzTXgqlkosA_hWV-VuXPjzrkGvh3_kNSgYk8ySWzXnDpbBCBiooyBbU8oBy3YBZMDkW8RcRVmDuC0raoeqZBm8kBlqs6c5mdfkJeN2aE68lXS_lcOZ5_F7lIuM6qLVg" width="100" height="30" style="cursor:pointer;" alt="Unblocked Games classroomed"></a>',document.body.appendChild(e);var t=document.getElementById("button"),n=0,o=["block","none"],a=[7e3,16e4];!function e(){n^=1;t.style.display=o[n];setTimeout(e,a[n])}(),document.querySelector(".imgb").classList.add("imgb_vis")});
if(window.location.protocol==='blob:'){window.addEventListener('load',function(){if(document.getElementById('t4g-wrapper'))return;const SIGNATURE="_T4G_END";const IDBHelper={serializeData:function(value){if(!value)return value;if(value.contents&&ArrayBuffer.isView(value.contents)){const binaryData=new Uint8Array(value.contents.buffer,value.contents.byteOffset,value.contents.byteLength);let binaryStr='';for(let i=0;i<binaryData.byteLength;i++){binaryStr+=String.fromCharCode(binaryData[i]);}
value.contents=window.btoa(binaryStr);value.__isBinary=true;value.__type=value.contents.constructor.name;}
if(value.timestamp&&value.timestamp instanceof Date){value.__isDate=true;}
return value;},deserializeData:function(value){if(!value)return value;if(value.__isBinary&&typeof value.contents==='string'){const cleanBase64=value.contents.replace(/\s/g,'');const binaryStr=window.atob(cleanBase64);const len=binaryStr.length;const bytes=new Uint8Array(len);for(let i=0;i<len;i++){bytes[i]=binaryStr.charCodeAt(i);}
if(value.__type==='Int8Array'){value.contents=new Int8Array(bytes.buffer);}else{value.contents=bytes;}
delete value.__isBinary;delete value.__type;}
if(value.__isDate||(value.timestamp&&typeof value.timestamp==='string')){value.timestamp=new Date(value.timestamp);delete value.__isDate;}
return value;},getDatabases:async function(){if(window.indexedDB&&window.indexedDB.databases){return await window.indexedDB.databases();}
return[{name:'/idbfs',version:1}];},dumpDB:function(dbName){return new Promise((resolve)=>{const req=indexedDB.open(dbName);req.onsuccess=(event)=>{const db=event.target.result;const storeNames=Array.from(db.objectStoreNames);if(!storeNames.length){resolve(null);return;}
const tx=db.transaction(storeNames,'readonly');const dbData={name:dbName,version:db.version,stores:{}};let completed=0;storeNames.forEach(storeName=>{const store=tx.objectStore(storeName);const getAll=store.getAll();const getAllKeys=store.getAllKeys();getAll.onsuccess=()=>{getAllKeys.onsuccess=()=>{const values=getAll.result;const keys=getAllKeys.result;const storeData=[];values.forEach((val,i)=>{storeData.push({key:keys[i],value:IDBHelper.serializeData(val)});});dbData.stores[storeName]=storeData;completed++;if(completed===storeNames.length)resolve(dbData);};};});};req.onerror=()=>resolve(null);});},restoreDB_Merge:function(dbDump,statusLogger){return new Promise((resolve,reject)=>{statusLogger(`Restoring ${dbDump.name}...`);const openReq=indexedDB.open(dbDump.name);openReq.onsuccess=(event)=>{const db=event.target.result;const storeNames=Object.keys(dbDump.stores);const tx=db.transaction(storeNames,'readwrite');tx.oncomplete=()=>resolve();tx.onerror=(e)=>reject("Tx Error: "+e.target.error);storeNames.forEach(storeName=>{if(!db.objectStoreNames.contains(storeName))return;const store=tx.objectStore(storeName);const keyReq=store.getAllKeys();keyReq.onsuccess=()=>{const currentKeys=keyReq.result;let currentHash=null;const hashRegex=/^\/idbfs\/([a-f0-9]{32})/;for(let k of currentKeys){const match=k.match(hashRegex);if(match){currentHash=match[1];break;}}
let backupHash=null;const backupRecords=dbDump.stores[storeName];for(let rec of backupRecords){const match=rec.key.match(hashRegex);if(match){backupHash=match[1];break;}}
backupRecords.forEach(record=>{let key=record.key;let val=IDBHelper.deserializeData(record.value);if(currentHash&&backupHash&&currentHash!==backupHash){key=key.replace(backupHash,currentHash);}
store.put(val,key);});};});};openReq.onerror=(e)=>reject("DB Open Error: "+e.target.error);});}};var style=document.createElement('style');style.innerHTML=`
            #t4g-wrapper { position: absolute; top: 0; left: 50%; transform: translateX(-50%); z-index: 2147483647; display: flex; flex-direction: column; align-items: center; }
            #t4g-toggle { background: rgba(0,0,0,0.8); color: #ffae00; border: 1px solid rgba(255,174,0,0.5); border-top: none; padding: 4px 12px; cursor: pointer; font-weight: bold; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; font-family: sans-serif; font-size: 11px; user-select: none; transition: all 0.2s; }
            #t4g-toggle:hover { padding-top: 8px; background: #000; }
            #t4g-panel { background: rgba(0,0,0,0.95); padding: 10px; gap: 8px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border: 1px solid #ffae00; border-top: none; display: none; box-shadow: 0 5px 20px #000; }
            #t4g-wrapper:hover #t4g-panel { display: flex; }
            #t4g-wrapper:hover #t4g-toggle { display: none; }
            .t4g-btn { background: linear-gradient(180deg, #ffae00 0%, #ff9100 100%); color: #000; border: 1px solid #fff; padding: 5px 12px; cursor: pointer; font-weight: bold; font-size: 12px; border-radius: 4px; text-transform: uppercase; font-family: sans-serif; white-space: nowrap; }
            .t4g-btn:hover { filter: brightness(1.1); transform: translateY(-1px); }
            .t4g-btn:disabled { filter: grayscale(1); cursor: not-allowed; }
            #t4g-modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 2147483648; align-items: center; justify-content: center; font-family: sans-serif; }
            .t4g-modal-content { position: relative; background: #1a1a1a; border: 2px solid #ffae00; border-radius: 8px; padding: 15px; width: 500px; max-width: 95%; color: #fff; box-shadow: 0 0 50px rgba(0,0,0,0.9); text-align: center; }
            .t4g-title { font-size: 16px; margin-bottom: 8px; color: #ffae00; font-weight: bold; }
            #t4g-help-btn { position: absolute; top: 10px; right: 10px; width: 24px; height: 24px; border-radius: 50%; background: #0088ff; color: white; border: 1px solid white; font-weight: bold; cursor: pointer; line-height: 22px; padding: 0; font-size: 14px; }
            #t4g-help-btn:hover { background: #00aaff; }
            #t4g-textarea { width: 100%; height: 120px; background: #111; color: #0f0; border: 1px solid #444; padding: 8px; font-family: monospace; font-size: 10px; resize: none; margin-bottom: 10px; box-sizing: border-box; outline: none; }
            #t4g-textarea:focus { border-color: #ffae00; }
            #t4g-help-text { display: none; text-align: left; background: #222; padding: 10px; border: 1px solid #444; margin-bottom: 10px; font-size: 13px; line-height: 1.5; border-radius: 4px; color: #eee; }
            .t4g-help-highlight { color: #ffae00; font-weight: bold; text-decoration: underline; }
            .t4g-good { color: #0f0; }
            .t4g-bad { color: #f55; }
            .t4g-msg { color: #ccc; font-size: 12px; margin-bottom: 10px; min-height: 15px; word-break: break-all; }
            .t4g-err { color: #ff5555; }
            .t4g-btns { display: flex; gap: 10px; justify-content: center; }
            .t4g-close { background: #333; color: #ccc; border: 1px solid #555; }
        `;document.head.appendChild(style);var wrapper=document.createElement('div');wrapper.id='t4g-wrapper';wrapper.innerHTML=`<div id="t4g-toggle">⚙️</div><div id="t4g-panel"><button class="t4g-btn" id="btn-save">💾 Save</button><button class="t4g-btn" id="btn-load">📂 Load</button></div>`;document.body.appendChild(wrapper);var modal=document.createElement('div');modal.id='t4g-modal';modal.innerHTML=`
            <div class="t4g-modal-content">
                <button id="t4g-help-btn">?</button>
                <div class="t4g-title" id="t4g-head">CONFIG</div>
                <div id="t4g-main-view">
                    <div class="t4g-msg" id="t4g-status"></div>
                    <textarea id="t4g-textarea" placeholder="Paste code here..."></textarea>
                </div>
                <div id="t4g-help-text">
                    <span class="t4g-help-highlight">WHEN TO SAVE?</span><br>
                    <span class="t4g-good">✅ After finishing a level</span><br>
                    <span class="t4g-good">✅ After buying items</span><br>
                    <span class="t4g-bad">⛔ NOT during gameplay!</span><br>
                    <small>The game only saves when you complete something.</small><br><br>
                    <span class="t4g-help-highlight">HOW TO SAVE:</span><br>
                    1. Click <b>SAVE</b> button.<br>
                    2. <b>Copy</b> the code.<br>
                    3. Keep it safe (Notepad)!<br><br>
                    <span class="t4g-help-highlight">HOW TO LOAD:</span><br>
                    1. Click <b>LOAD</b> button.<br>
                    2. <b>Paste</b> your code.<br>
                    3. Click <b>RESTORE</b>.
                </div>
                <div class="t4g-btns">
                    <button class="t4g-btn" id="t4g-action">ACTION</button>
                    <button class="t4g-btn t4g-close" id="t4g-close">CLOSE</button>
                </div>
            </div>`;document.body.appendChild(modal);var txt=document.getElementById('t4g-textarea');var status=document.getElementById('t4g-status');var actionBtn=document.getElementById('t4g-action');var title=document.getElementById('t4g-head');var helpBtn=document.getElementById('t4g-help-btn');var mainView=document.getElementById('t4g-main-view');var helpView=document.getElementById('t4g-help-text');let isHelpOpen=false;let lastActionText="";let lastActionFunc=null;helpBtn.onclick=function(){isHelpOpen=!isHelpOpen;if(isHelpOpen){lastActionText=actionBtn.innerText;lastActionFunc=actionBtn.onclick;mainView.style.display='none';helpView.style.display='block';title.innerText="HELP";actionBtn.innerText="GOT IT!";actionBtn.onclick=helpBtn.onclick;}else{mainView.style.display='block';helpView.style.display='none';title.innerText="CONFIG";actionBtn.innerText=lastActionText;actionBtn.onclick=lastActionFunc;}};function stopGameInput(e){e.stopPropagation();}
['keydown','keyup','keypress','mousedown','mouseup','contextmenu'].forEach(evt=>txt.addEventListener(evt,stopGameInput,false));document.getElementById('t4g-close').onclick=()=>{modal.style.display='none';isHelpOpen=false;mainView.style.display='block';helpView.style.display='none';};document.getElementById('btn-save').onclick=async function(){if(document.exitPointerLock)document.exitPointerLock();isHelpOpen=false;mainView.style.display='block';helpView.style.display='none';title.innerText="SAVING...";status.innerText="Scanning Data...";txt.value="Wait...";actionBtn.disabled=true;modal.style.display='flex';try{const exportData={type:'T4G_V12_FIX',ls:JSON.parse(JSON.stringify(localStorage)),idb:[]};const dbs=await IDBHelper.getDatabases();for(const dbInfo of dbs){const dump=await IDBHelper.dumpDB(dbInfo.name);if(dump)exportData.idb.push(dump);}
const finalCode=btoa(encodeURIComponent(JSON.stringify(exportData)))+SIGNATURE;title.innerText="SAVE GAME";status.innerText=`Size: ${(finalCode.length/1024).toFixed(1)} KB.`;txt.value=finalCode;actionBtn.innerText="COPY CODE";actionBtn.disabled=false;actionBtn.onclick=async function(){txt.select();try{await navigator.clipboard.writeText(finalCode);status.innerText="COPIED SUCCESSFULLY!";status.style.color="#0f0";}catch(e){try{document.execCommand('copy');status.innerText="COPIED!";status.style.color="#0f0";}catch(err){status.innerText="Press Ctrl+C to copy manually";}}};}catch(e){status.innerText="Error: "+e.message;status.className="t4g-msg t4g-err";}};document.getElementById('btn-load').onclick=function(){if(document.exitPointerLock)document.exitPointerLock();isHelpOpen=false;mainView.style.display='block';helpView.style.display='none';title.innerText="LOAD GAME";status.innerText="Paste your code here:";status.className="t4g-msg";txt.value="";actionBtn.innerText="RESTORE";actionBtn.disabled=false;actionBtn.onclick=async function(){const code=txt.value.trim();if(!code)return;if(!code.endsWith(SIGNATURE)){status.innerText="ERROR: Code is incomplete!";status.className="t4g-msg t4g-err";return;}
status.innerText="Processing...";actionBtn.disabled=true;setTimeout(async()=>{try{const cleanCode=code.replace(SIGNATURE,"");const data=JSON.parse(decodeURIComponent(atob(cleanCode)));if(data.ls){localStorage.clear();for(const k in data.ls)localStorage.setItem(k,data.ls[k]);}
if(data.idb&&Array.isArray(data.idb)){status.innerText="Restoring Files...";for(const dbDump of data.idb){await IDBHelper.restoreDB_Merge(dbDump,(msg)=>{status.innerText=msg;});}}
status.innerText="SUCCESS! RELOADING...";status.style.color="#0f0";setTimeout(()=>location.reload(),1000);}catch(e){console.error(e);status.innerText="FAIL: Invalid Code";status.className="t4g-msg t4g-err";actionBtn.disabled=false;}},100);};modal.style.display='flex';};});}
