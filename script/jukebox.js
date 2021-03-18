// 频率：采用十二平均律，以A4=440Hz为基准频率
// index = 12 × (组号-1) + 列号
const freq = [
    0, 
 // 1        2        3        4        5        6        7        8        9        10       11       12
 // 1(C)     #1(C)    2(D)     b3(E)    3(E)     4(F)     #4(F)    5(G)     #5(G)    6(A)     b7(B)    7(B)
    32.70,    34.65,   36.71,   38.89,   41.20,   43.65,   46.25,   49.00,   51.91,   55.00,   58.27,  61.74,     // 1
    65.41,    69.30,   73.42,   77.78,   82.41,   87.31,   92.50,   98.00,  103.83,  110.00,  116.54,  123.47,    // 2
    130.81,  138.59,  146.83,  155.56,  164.81,  174.61,  185.00,  196.00,  207.65,  220.00,  233.08,  246.94,    // 3
    261.62,  277.18,  293.66,  311.13,  329.63,  349.23,  369.99,  392.00,  415.30,  440.00,  466.16,  493.88,    // 4
    523.25,  554.36,  587.33,  622.25,  659.26,  698.46,  740.00,  783.99,  830.61,  880.00,  932.33,  987.77,    // 5
    1046.50, 1108.73, 1174.66, 1244.50, 1318.51, 1396.91, 1479.98, 1567.98, 1661.22, 1760.00, 1864.66, 1975.53,   // 6
    2093.00, 2217.46, 2349.32, 2489.02, 2637.02, 2793.83, 2959.96, 3135.96, 3322.44, 3520.00, 3729.31, 3951.07,   // 7
    4186.01, 4434.92, 4698.64, 4978.03, 5274.04, 5587.65, 5919.91, 6271.93, 6644.88, 7040.00, 7458.62, 7902.13];  // 8

const TONENAME_TO_INDEX = {
    "C1": 1,   "C#1": 2,   "D1": 3,   "Eb1": 4,   "E1": 5,   "F1": 6,   "F#1": 7,   "G1": 8,   "G#1": 9,   "A1": 10,  "Bb1": 11,  "B1": 12,
    "C2": 13,  "C#2": 14,  "D2": 15,  "Eb2": 16,  "E2": 17,  "F2": 18,  "F#2": 19,  "G2": 20,  "G#2": 21,  "A2": 22,  "Bb2": 23,  "B2": 24,
    "C3": 25,  "C#3": 26,  "D3": 27,  "Eb3": 28,  "E3": 29,  "F3": 30,  "F#3": 31,  "G3": 32,  "G#3": 33,  "A3": 34,  "Bb3": 35,  "B3": 36,
    "C4": 37,  "C#4": 38,  "D4": 39,  "Eb4": 40,  "E4": 41,  "F4": 42,  "F#4": 43,  "G4": 44,  "G#4": 45,  "A4": 46,  "Bb4": 47,  "B4": 48,
    "C5": 49,  "C#5": 50,  "D5": 51,  "Eb5": 52,  "E5": 53,  "F5": 54,  "F#5": 55,  "G5": 56,  "G#5": 57,  "A5": 58,  "Bb5": 59,  "B5": 60,
    "C6": 61,  "C#6": 62,  "D6": 63,  "Eb6": 64,  "E6": 65,  "F6": 66,  "F#6": 67,  "G6": 68,  "G#6": 69,  "A6": 70,  "Bb6": 71,  "B6": 72,
    "C7": 73,  "C#7": 74,  "D7": 75,  "Eb7": 76,  "E7": 77,  "F7": 78,  "F#7": 79,  "G7": 80,  "G#7": 81,  "A7": 82,  "Bb7": 83,  "B7": 84,
    "C8": 85,  "C#8": 86,  "D8": 87,  "Eb8": 88,  "E8": 89,  "F8": 90,  "F#8": 91,  "G8": 92,  "G#8": 93,  "A8": 94,  "Bb8": 95,  "B8": 96
};

// 七声音阶各音名对应十二平均律的偏移
// C+ C D E F G A B
const TO_TONENAME = [12, 1, 3, 5, 6, 8, 10, 12];

// 钢琴琴弦的振动时间(s)
const PIANO_OSC_DELAY = 2.2;

function Tone(context) {
    this.context = context;
}

Tone.prototype = {
    init: function() {
        this.oscillator = this.context.createOscillator();
        this.gainNode = this.context.createGain();
        this.oscillator.connect(this.gainNode);
        this.gainNode.connect(this.context.destination);
    },
    addOvertone: function(freq, gain) {
        let osc = this.context.createOscillator();
        let gainNode = this.context.createGain();

        osc.frequency.value = freq;
        gainNode.gain.value = gain / 10;
        gainNode.gain.exponentialRampToValueAtTime(0.00001, this.context.currentTime + PIANO_OSC_DELAY);
        
        osc.connect(gainNode);
        gainNode.connect(this.context.destination);
        return osc;
    },
    tick: function(delay) {
        var source = this.context.createBufferSource();
        source.buffer = BUFFERS.tick;
        source.connect(this.context.destination);
        source.start();
        source.stop(this.context.currentTime + (delay/1000));
    },
    tick2: function(delay) {
        var source = this.context.createBufferSource();
        source.buffer = BUFFERS.tick2;
        source.connect(this.context.destination);
        source.start();
        source.stop(this.context.currentTime + (delay/1000));
    },
    tock: function(delay) {
        var source = this.context.createBufferSource();
        source.buffer = BUFFERS.tock;
        source.connect(this.context.destination);
        source.start();
        source.stop(this.context.currentTime + (delay/1000));
    },
    play: function(value, delay) {
        this.init();
        tone.oscillator.type = 'sine';
        this.gainNode.gain.setValueAtTime(0.3, this.context.currentTime);
        this.oscillator.frequency.value = value;
        this.oscillator.start();
        this.gainNode.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + PIANO_OSC_DELAY);
        this.oscillator.stop(this.context.currentTime + PIANO_OSC_DELAY);

        // 象征性地加一点泛音
        for(let i = 1; i <= 3; i++) {
            let osc = this.addOvertone(value * Math.pow(2, i), Math.pow(2.2, -i));
            osc.start();
            osc.stop(this.context.currentTime + PIANO_OSC_DELAY);
        }
    },
    stop: function() {
        this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.5);
        this.oscillator.stop(this.context.currentTime + 0.5);
    }
}

var context = new AudioContext();
var tone = new Tone(context);
tone.init();

function JukeBox(bpm, shift, spect) {
    let offset = 0;
    let C = shift;
    let DELAY = (60000 / bpm);

    let jukebox = function() {
        clearInterval(timer);
        let tn =  spect[offset * 2];
        let delay = spect[offset * 2 + 1];
        if(tn === undefined) {
            clearInterval(jukebox);
            return;
        }

        // parse tone
        let toneNum = 0;
        if(tn[0] === '.') {
            toneNum = parseInt(TO_TONENAME[tn[1]]) + C;
        }
        else if(tn[0] === '+') {
            toneNum = parseInt(TO_TONENAME[tn[1]]) + C + 12;
        }
        else if(tn[0] === '-') {
            toneNum = parseInt(TO_TONENAME[tn[1]]) + C - 12;
        }
        else {
            toneNum = 0;
        }

        // parse 升降号
        if(tn[2] === '#') {
            toneNum++;
        }
        else if(tn[2] === 'b'){
            toneNum--;
        }

        // parse delay
        DELAY = (60000 / bpm) * parseFloat(delay);
        if(parseInt(tn[1]) > 0 && parseInt(tn[1]) < 8) {
            tone.play(freq[toneNum], DELAY);
        }
        else if(parseInt(tn[0]) === 0){
            tone.tick(DELAY);
        }
        else if(parseInt(tn[0]) === 8){
            tone.tick2(DELAY);
        }
        else if(parseInt(tn[0]) === 9){
            tone.tock(DELAY);
        }

        offset++;

        timer = setInterval(jukebox, DELAY);
    };

    let timer = setInterval(jukebox, DELAY);
}

function BufferLoader(context, urlList, callback) {
    this.context = context;
    this.urlList = urlList;
    this.onload = callback;
    this.bufferList = new Array();
    this.loadCount = 0;
  }
  
BufferLoader.prototype.loadBuffer = function(url, index) {
// Load buffer asynchronously
var request = new XMLHttpRequest();
request.open("GET", url, true);
request.responseType = "arraybuffer";

var loader = this;

request.onload = function() {
    // Asynchronously decode the audio file data in request.response
    loader.context.decodeAudioData(
    request.response,
    function(buffer) {
        if (!buffer) {
        alert('error decoding file data: ' + url);
        return;
        }
        loader.bufferList[index] = buffer;
        if (++loader.loadCount == loader.urlList.length)
        loader.onload(loader.bufferList);
    }
    );
}

request.onerror = function() {
    console.error('BufferLoader: XHR error');
}

request.send();
}
  
BufferLoader.prototype.load = function() {
    for (var i = 0; i < this.urlList.length; ++i)
        this.loadBuffer(this.urlList[i], i);
}

// Keep track of all playing sources
var SOURCES = [];
// Keep track of all loaded buffers.
var BUFFERS = {};
// Page-wide audio context.
var context = null;

// An object to track the buffers to load {name: path}
var BUFFERS_TO_LOAD = {
    tick: './js/tick.wav',
    tick2: './js/tick2.wav',
    tock: './js/tock.wav',
};

// Stops all playing sources
function stopSources() {
    for (var i = 0; i < SOURCES.length; i++) {
        var source = SOURCES[i];
        source.noteOff(0);
    }
    SOURCES = [];
}

// Loads all sound samples into the buffers object.
function loadBuffers() {
    // Array-ify
    var names = [];
    var paths = [];
    for (var name in BUFFERS_TO_LOAD) {
        var path = BUFFERS_TO_LOAD[name];
        names.push(name);
        paths.push(path);
    }
    bufferLoader = new BufferLoader(context, paths, function(bufferList) {
        for (var i = 0; i < bufferList.length; i++) {
        var buffer = bufferList[i];
        var name = names[i];
        BUFFERS[name] = buffer;
        }
    });
    bufferLoader.load();
}

document.addEventListener('DOMContentLoaded', function() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        console.error("Web Audio API is not supported in this browser");
    }
    loadBuffers();
});
