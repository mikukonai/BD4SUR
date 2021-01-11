function LoadStationLog() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `./station_log.json`);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let log = JSON.parse(xhr.responseText);
            for(let i = 0; i < log.length; i++) {
                let item = log[i];
                $("#StationLogTable").append(`
    <tr>
        <td>${item.time}</td>
        <td>${item.callsign}</td>
        <td>
            <table class="InfoTable">
                <tr><th class="LogColoumInfo">FREQ</th><td class="LogColoumInfoValue">${item.freq}</td></tr>
                <tr><th class="LogColoumInfo">MODE</th><td class="LogColoumInfoValue">${item.mode}</td></tr>
                <tr><th class="LogColoumInfo">RST</th><td class="LogColoumInfoValue">${item.rst}</td></tr>
            </table>
        </td>
        <td>
            <table class="InfoTable">
                <tr><th class="LogColoumInfo">RIG</th><td class="LogColoumInfoValue">${item.rig}</td></tr>
                <tr><th class="LogColoumInfo">ANT</th><td class="LogColoumInfoValue">${item.ant}</td></tr>
                <tr><th class="LogColoumInfo">PWR</th><td class="LogColoumInfoValue">${item.pwr}</td></tr>
                <tr><th class="LogColoumInfo">QTH</th><td class="LogColoumInfoValue">${item.qth}</td></tr>
            </table>
        <td>
            <table class="InfoTable">
                <tr><th class="LogColoumInfo">RIG</th><td class="LogColoumInfoValue">${item.rig_self}</td></tr>
                <tr><th class="LogColoumInfo">ANT</th><td class="LogColoumInfoValue">${item.ant_self}</td></tr>
                <tr><th class="LogColoumInfo">PWR</th><td class="LogColoumInfoValue">${item.pwr_self}</td></tr>
                <tr><th class="LogColoumInfo">QTH</th><td class="LogColoumInfoValue">${item.qth_self}</td></tr>
            </table>
        </td>
        <td class="LogColoumNote">${item.note}</td>
    </tr>
                `);
            }
        }
        else if(xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200){
            $("#StationLogTable").html("没有找到日志数据...");
            return;
        }
    };
    xhr.send();
}

