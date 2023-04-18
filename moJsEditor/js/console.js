let console = (function (oldConsole) {
  return {
    consoleScreen: document.getElementById("console"),
    log: (msg) => {
      oldConsole.log(msg);
      switch (console.getType(msg)) {
        case "string":
          console.consoleScreen.innerHTML += `<pre class="consoleItem string">> "${msg}"</pre>`;
          break;
        case "number":
          console.consoleScreen.innerHTML += `<pre class="consoleItem number">> ${msg}</pre>`;
          break;
        case "boolean":
          console.consoleScreen.innerHTML += `<pre class="consoleItem boolean">> ${msg}</pre>`;
          break;
        case "object":
          var jsonViewer = new JSONViewer();
          var jsonDiv = document.createElement('div');
          jsonDiv.classList.add("jsonClass");
          document.getElementById('console').append(jsonDiv);
          jsonDiv.appendChild(jsonViewer.getContainer());
          jsonViewer.showJSON(msg,-1,1);

          break;
        case "array":
          console.consoleScreen.innerHTML += `<pre class="consoleItem array">> [${Array.from(msg)}]</pre>`;
          break;
        default:
          consoleMsgs.push(`> ${msg}`);
      }
    },
    info: (msg) => {
        oldConsole.info(msg);
      switch (console.getType(msg)) {
        case "string":
          console.consoleScreen.innerHTML += `> "${msg}" length: ${msg.length}<br>`;
          break;
        case "number":
          console.consoleScreen.innerHTML += `> ${msg}<br>`;
          break;
        case "boolean":
          console.consoleScreen.innerHTML += `> ${msg}<br>`;
          break;
        case "object":
          console.consoleScreen.innerHTML += `> ${JSON.stringify(msg)}<br>`;
          break;
        case "array":
          console.consoleScreen.innerHTML += `> [${Array.from(msg)}]<br>`;
          break;
        default:
          consoleMsgs.push(`> ${msg}`);
      }
      
    },
    warn: () => {
      oldConsole.warn(msg);
      consoleMsgs.push(msg);
    },
    error: (msg) => {
      oldConsole.error(msg);
      console.consoleScreen.innerHTML += `<pre class="consoleItem error">> ${msg}</pre>`;
    },
    getType: (msg) => {
      if (typeof msg === "string") return "string";
      if (typeof msg === "number") return "number";
      if (typeof msg === "boolean") return "boolean";
      if (typeof msg === "function") return "function";
      if (typeof msg === "undefined") return "undefined";
      if (typeof msg === "object" && !Array.isArray(msg)) return "object";
      if (typeof msg === "object" && Array.isArray(msg)) return "array";
    },
  };
})(window.console);
