"use strict";
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");
  /////////////
 /*  audio  */
/////////////
Blockly.Blocks["lp2i_mp3_play_track"]={init:function(){
    this.appendValueInput("num", "Number").appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzRkRFQjcxODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzRkRFQjcwODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5iogFwAAAGhJREFUeNpiYGBgKABigf///zOQg0EARH4A4gZyDIIZ8B/JoAJKDIDhB0CcQIkBRBtEyABkgxwoMQCGD6AbRKoBGAYxQgXIBRuZGKgAKPIC3QLxArnRSHZCIjspk52ZKMrOFBUoAAEGAKnq593MQAZtAAAAAElFTkSuQmCC", 11, 15))
		.appendField(Blockly.Msg.lp2i_mp3_play+" n°");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#a600d3");
    this.setTooltip(Blockly.Msg.lp2i_mp3_play_track_tooltip);
    this.setHelpUrl(Blockly.Msg.lp2i_mp3_helpurl)}
};
Blockly.Arduino["lp2i_mp3_play_track"]=function(block){
	var piste=Blockly.Arduino.valueToCode(block, "num", Blockly.Arduino.ORDER_ATOMIC);
    return "exe_cmd(0x03,0,"+piste+");\ndelay(500);\n"
};
Blockly.Python["lp2i_mp3_play_track"]=function(block){
	var piste=Blockly.Python.valueToCode(block, "num", Blockly.Python.ORDER_ATOMIC);
    return "mp3.PlaySpecific("+piste+")\n"
};
//////////////
Blockly.Blocks["lp2i_mp3_play"]={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzRkRFQjcxODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzRkRFQjcwODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5iogFwAAAGhJREFUeNpiYGBgKABigf///zOQg0EARH4A4gZyDIIZ8B/JoAJKDIDhB0CcQIkBRBtEyABkgxwoMQCGD6AbRKoBGAYxQgXIBRuZGKgAKPIC3QLxArnRSHZCIjspk52ZKMrOFBUoAAEGAKnq593MQAZtAAAAAElFTkSuQmCC", 11, 15))
		.appendField(Blockly.Msg.lp2i_mp3_play);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#a600d3");
    this.setTooltip(Blockly.Msg.lp2i_mp3_play_tooltip);
    this.setHelpUrl(Blockly.Msg.lp2i_mp3_helpurl)}
};
Blockly.Arduino["lp2i_mp3_play"]=function(block){
    return "exe_cmd(0x0D,0,1);\ndelay(500);\n"
};
Blockly.Python["lp2i_mp3_play"]=function(block){
    return "mp3.Play()\n"
};
//////////////
Blockly.Blocks["play"]={init:function(){
    this.appendDummyInput()
		.appendField(Blockly.Msg.play)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.tempo), "tempo")
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.note), "note")
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#a600d3");
    this.setTooltip(Blockly.Msg.play_tooltip);
    this.setHelpUrl(Blockly.Msg.play_helpurl)}
};
Blockly.Arduino["play"]=function(block){
    var value_note=block.getFieldValue("note");
    var value_tempo=block.getFieldValue("tempo");
    Blockly.Arduino.setups_["setup_output"]="pinMode( 13 , OUTPUT);";
    return "tone( 13," + value_note + "," + value_tempo + ");\ndelay(" + value_tempo + ");\n"
};
Blockly.Python["play"]=function(block){
    var value_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
    var value_note=block.getFieldValue("note");
    var value_tempo=block.getFieldValue("tempo");
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.imports_["pwm"]="from machine import PWM";
	Blockly.Python.imports_["time"]="import time";
	return "Play_"+value_pin+" = PWM(Pin("+value_pin+"), freq=" + value_note + ")\ntime.sleep(" + value_tempo + ")\nPlay_" + value_pin + ".deinit()\n"
};
//////////////
Blockly.Blocks["tone"]={init:function(){
        this.setColour("#a600d3");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendValueInput("PIN", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_TONE_INPUT1);
        this.appendValueInput("NUM").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_TONE_INPUT2).setCheck("Number");
        this.appendValueInput("TPS").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_TONE_INPUT3).setCheck("Number");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_TONE_TOOLTIP)}
};
Blockly.Arduino["tone"]=function(block){
    var value_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var value_num=Blockly.Arduino.valueToCode(block, "NUM", Blockly.Arduino.ORDER_ATOMIC);
    var value_tps=Blockly.Arduino.valueToCode(block, "TPS", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_output" + value_pin]="pinMode(" + value_pin + ", OUTPUT);";
    return "tone(" + value_pin + "," + value_num + "," + value_tps + ");\ndelay(" + value_tps + ");\n"
};
Blockly.Python["tone"]=function(block){
    var dropdown_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
    var value_num=Blockly.Python.valueToCode(block, "NUM", Blockly.Python.ORDER_ATOMIC);
    var value_tps=Blockly.Python.valueToCode(block, "TPS", Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.imports_["pwm"]="from machine import PWM";
    Blockly.Python.imports_["time"]="import time";
    return "Buzzer_"+dropdown_pin+" = PWM(Pin("+dropdown_pin+"), freq=" + value_num + ")\ntime.sleep(" + value_tps + ")\nBuzzer_"+dropdown_pin+".deinit()\n"
};
//////////////
Blockly.Blocks["beep"]={init:function(){
    this.appendValueInput("PIN", "Number").appendField(Blockly.Msg.beep);
    this.setColour("#a600d3");
    this.setPreviousStatement(true, null);this.setNextStatement(true, null);
    this.setHelpUrl(Blockly.Msg.HELPURL);this.setTooltip(Blockly.Msg.beep_TOOLTIP)}
};
Blockly.Arduino["beep"]=function(block){
    var value_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_output" + value_pin]="pinMode(" + value_pin + ", OUTPUT);";
    return "tone(" + value_pin + ",440,1000);\ndelay(1000);\n"
};
Blockly.Python["beep"]=function(block){
    var value_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.setups_["setup_output" + value_pin]="pinMode(" + value_pin + ", OUTPUT);";
    return "tone(" + value_pin + ",440,1000);\ndelay(1000);\n"
};
//////////////

 
//////////////
Blockly.Blocks["lp2i_mp3_init"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage('media/dfplayer.png', 48, 48, "*"))
		this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.lp2i_mp3_autoplay).appendField(new Blockly.FieldCheckbox("FALSE"), "play");
        this.appendValueInput("Volume", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.lp2i_mp3_Volume);
        this.setInputsInline(false);
        this.setColour("#a600d3");
        this.setTooltip(Blockly.Msg.lp2i_mp3_tooltip);
        this.setHelpUrl(Blockly.Msg.lp2i_mp3_helpurl)}
};
Blockly.Arduino["lp2i_mp3_init"]=function(block){
    var autoplay=block.getFieldValue('play') == 'TRUE';
    var vol=Blockly.Arduino.valueToCode(block, "Volume", Blockly.Arduino.ORDER_ATOMIC);
	var volume=parseInt(vol);
	var volume_hex;
	if (volume>48){
		volume_hex="0x30";
	}else{
		volume_hex="0x"+volume.toString(16);
	}
    Blockly.Arduino.codeFunctions_["fonction_mp3"]="void exe_cmd(byte CMD, byte Par1, byte Par2) {\n  word check=-(0xFF + 0x06 + CMD + 0x00 + Par1 + Par2);\n  byte Command[10]={0x7E,0xFF,0x06,CMD,0x00,Par1,Par2,highByte(check),lowByte(check),0xEF};\n  for (int i=0; i<10; i++) {\n    Serial.write( Command[i]);\n  };\n}";
    if (autoplay){
		Blockly.Arduino.setups_["setup_mp3"]="Serial.begin(9600);\n  delay(1000);\n  exe_cmd(0x3F,0,0);\n  delay(500);\n  exe_cmd(0x06,0," + volume_hex + ");\n  delay(500);\n  exe_cmd(0x11,0,1);\n  delay(500);";
	}else{
		Blockly.Arduino.setups_["setup_mp3"]="Serial.begin(9600);\n  delay(1000);\n  exe_cmd(0x3F,0,0);\n  delay(500);\n  exe_cmd(0x06,0," + volume_hex + ");\n  delay(500);";
	};
    return ""
};
Blockly.Python["lp2i_mp3_init"]=function(block){
    var autoplay=block.getFieldValue('play') == 'TRUE';
    var vol=Blockly.Python.valueToCode(block, "Volume", Blockly.Python.ORDER_ATOMIC);
	var volume=parseInt(vol);
    Blockly.Python.imports_["kt403a"]="from kt403A import KT403A";
	if (volume>48){
		var volume_hex="0x30";
	}else{
		var volume_hex="0x"+volume.toString(16);
	}
    if (autoplay){
		Blockly.Python.definitions_["setup_mp3"]="mp3 = KT403A(1, 3, 4)\nmp3.SetVolume(" + volume_hex + ")\nmp3.EnableLoopAll()";
	}else{
		Blockly.Python.definitions_["setup_mp3"]="mp3 = KT403A(1, 3, 4)\nmp3.SetVolume(" + volume_hex + ")";
	};
    return ""
};
//////////////
Blockly.Blocks["lp2i_mp3_volume"]={init:function(){
        this.appendValueInput("Volume", "Number").appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBBNkM4Q0REODUzNjExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBBNkM4Q0RDODUzNjExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ZCM1gAAAAJ1JREFUeNpi+P//PwM+DAQGQPwBTUwBziZGMwNYGUQjEF+AYgG8BiBrRjIgAMYH4gacBqBrhhkAlVsAFQPJC6BrFADiAmSNWAxQQBJPYEC3CRdGs+gCVHwBE5DgZyAdbIDSCkwMFAKqGPCRIgOAgQJKEIwgDOQLAnEhEYYGQOkH5KQD1GgkJSUSTEhE5AUDopIyvtwIBBOQMxNAgAEAuSU2gW6bTpkAAAAASUVORK5CYII=", 16, 15, "+/-"))
			.setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.lp2i_mp3_vol);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#a600d3");
        this.setTooltip(Blockly.Msg.lp2i_mp3_vol_tooltip);
        this.setHelpUrl(Blockly.Msg.lp2i_mp3_helpurl)}
};
Blockly.Arduino["lp2i_mp3_volume"]=function(block){
    var vol=Blockly.Arduino.valueToCode(block, "Volume", Blockly.Arduino.ORDER_ATOMIC);
	var volume=parseInt(vol);
	var volume_hex;
	if (volume>48){
		volume_hex="0x30";
	}else{
		volume_hex="0x"+volume.toString(16);
	}
	return "exe_cmd(0x06,0," + volume_hex + ");\ndelay(500);\n"
};
Blockly.Python["lp2i_mp3_volume"]=function(block){
    var vol=Blockly.Python.valueToCode(block, "Volume", Blockly.Python.ORDER_ATOMIC);
	var volume=parseInt(vol);
	if (volume>48){
		var volume_hex="0x30";
	}else{
		var volume_hex="0x"+volume.toString(16);
	}
	return "mp3.SetVolume(" + volume_hex + ")\n"
};
//////////////
Blockly.Blocks["lp2i_mp3_next"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAwMTg1RDMxODUzNjExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAwMTg1RDMwODUzNjExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wcaEcAAAAH9JREFUeNpiYGBg+A/ECf///2cghIHgA1Q9iAYzQHgBEAsQ0PgfCaNwLgCxAjkaYc5wIEcjDDeQqxGENyD7mxSNIPwAiA3I0QjzdwKyGCNMN6mAiYFMQKzGj0AciC5IyH8XyAkcsqKjgC5J7gK+HIJL4wIi8iOKxg/kZGSAAAMAVFNP2P+hQjMAAAAASUVORK5CYII=", 11, 14, ">>")).appendField(Blockly.Msg.lp2i_mp3_next);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#a600d3");
        this.setTooltip(Blockly.Msg.lp2i_mp3_next_tooltip);
        this.setHelpUrl(Blockly.Msg.lp2i_mp3_helpurl)}
};
Blockly.Arduino["lp2i_mp3_next"]=function(block){
    return "exe_cmd(0x01,0,1);\ndelay(500);\n"
};
Blockly.Python["lp2i_mp3_next"]=function(block){
    return "mp3.PlayNext()\n"
};
//////////////
Blockly.Blocks["lp2i_mp3_prev"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJBMDU0MERBODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJBMDU0MEQ5ODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+nEjlMgAAAI1JREFUeNpiYGBg+ADE/0H0////GQhhIEiAqgcTYExAgwAQL0BST1gjECgA8QVktQQ1AoEDkneI0wgEDVg04NYI9c8GPJowNQKBARA/IKAJVSM0qD8Qoek/I0w3qYBsjUxo/EAg/kisZmyBc4GkwKEoOtASQAFZGslOcmhOv0CyRiQDULIVORn5A0CAAQBJf1DWEisqAgAAAABJRU5ErkJggg==", 11, 14, "<<")).appendField(Blockly.Msg.lp2i_mp3_prev);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#a600d3");
        this.setTooltip(Blockly.Msg.lp2i_mp3_prev_tooltip);
        this.setHelpUrl(Blockly.Msg.lp2i_mp3_helpurl)}
};
Blockly.Arduino["lp2i_mp3_prev"]=function(block){
    return "exe_cmd(0x02,0,1);\ndelay(500);\n"
};
Blockly.Python["lp2i_mp3_prev"]=function(block){
    return "mp3.PlayPrevious()\n"
};
//////////////
Blockly.Blocks["lp2i_mp3_pause"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzRkRFQjc1ODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzRkRFQjc0ODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Zpm4zgAAADhJREFUeNpiYGBg+ADE/6H4w////xlAGF2cEcqAA6AikBgDIyMjijgTA5FgVOHIUvgRiY+TDRBgABwUFpfIuBw0AAAAAElFTkSuQmCC", 11, 14, "||")).appendField(Blockly.Msg.lp2i_mp3_pause);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#a600d3");
        this.setTooltip(Blockly.Msg.lp2i_mp3_pause_tooltip);
        this.setHelpUrl(Blockly.Msg.lp2i_mp3_helpurl)}
};
Blockly.Arduino["lp2i_mp3_pause"]=function(block){
    return "exe_cmd(0x0E,0,0);\ndelay(500);\n"
};
Blockly.Python["lp2i_mp3_pause"]=function(block){
    return "mp3.Pause()\n"
};
  ///////////
 /*	 lcd  */
///////////
Blockly.Blocks["lcd_i2c"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage('media/LCD.png', 48, 48, "*"))
			.appendField(Blockly.Msg.LCD+" I2C");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.lcd_fond).appendField(new Blockly.FieldDropdown(Blockly.Msg.couleur), "fond");
        this.setColour("#4b009f");
        this.setTooltip(Blockly.Msg.LCDi2c_tooltip);
        this.setHelpUrl("http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/");
    }
};
Blockly.Arduino["lcd_i2c"]=function(block){
    var fond_couleur=block.getFieldValue("fond");
    Blockly.Arduino.includes_["rgb_lcd"]='#include <Wire.h>\n#include <rgb_lcd.h>';
    Blockly.Arduino.definitions_["rgb_lcd"]="rgb_lcd lcd;";
    switch (fond_couleur) {
        case "bleu":
            var code="  lcd.setRGB(0,0,255);";
            break;
        case "jaune":
            var code="  lcd.setRGB(255,255,0);";
            break;
        case "rouge":
            code="  lcd.setRGB(255,0,0);";
            break;
        case "vert":
            var code="  lcd.setRGB(0,255,0);";
            break
    };
	Blockly.Arduino.setups_["rgb_lcd"]="lcd.begin(16,2);\n  lcd.clear();\n"+code;
    return "";
};
Blockly.Python["lcd_i2c"]=function(block){
    var fond_couleur=block.getFieldValue("fond");
    Blockly.Python.imports_["rgb_lcd"]="from grove_rgb_lcd import *";
    switch (fond_couleur) {
        case "bleu":
            Blockly.Python.definitions_["setrgb"]="setRGB(0,0,255)";
            break;
        case "jaune":
            Blockly.Python.definitions_["setrgb"]="setRGB(255,255,0)";
            break;
        case "rouge":
            Blockly.Python.definitions_["setrgb"]="setRGB(255,0,0)";
            break;
        case "vert":
            Blockly.Python.definitions_["setrgb"]="setRGB(0,255,0)";
            break
    }
    return ""
};
//////////////
Blockly.Blocks["lcd_symbole"]={init:function(){
    this.appendDummyInput().appendField(Blockly.Msg.lcd_symbole).appendField(new Blockly.FieldDropdown(Blockly.Msg.char_lcd),"c_char");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010"), "L1");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101"), "L2");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010"), "L3");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101"), "L4");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010"), "L5");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101"), "L6");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010"), "L7");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101"), "L8");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl(Blockly.Msg.HELPURL);
    this.setColour("#4b009f");
	this.setTooltip(Blockly.Msg.lcd_symbole_tooltip)}
};
Blockly.Arduino["lcd_symbole"]=function(block){
    var vname=block.getFieldValue("c_char");
    var l1=block.getFieldValue("L1");
    var l2=block.getFieldValue("L2");
    var l3=block.getFieldValue("L3");
    var l4=block.getFieldValue("L4");
    var l5=block.getFieldValue("L5");
    var l6=block.getFieldValue("L6");
    var l7=block.getFieldValue("L7");
    var l8=block.getFieldValue("L8");
    Blockly.Arduino.variables_["char_"+vname]="byte char_" + vname + "[]={\n B" + l1 + ",\n B" + l2 + ",\n B" + l3 + ",\n B" + l4 + ",\n B" + l5 + ",\n B" + l6 + ",\n B" + l7 + ",\n B" + l8 + "\n" + "};";
    Blockly.Arduino.setups_["char_"+vname]="lcd.createChar("+vname+",char_"+vname+");";
	return ""
};
Blockly.Python["lcd_symbole"]=function(block){
    var vname=block.getFieldValue("c_char");
    var l1=block.getFieldValue("L1");
    var l2=block.getFieldValue("L2");
    var l3=block.getFieldValue("L3");
    var l4=block.getFieldValue("L4");
    var l5=block.getFieldValue("L5");
    var l6=block.getFieldValue("L6");
    var l7=block.getFieldValue("L7");
    var l8=block.getFieldValue("L8");
    Blockly.Python.variables_["char_"+vname]="byte char_" + vname + "[]={\n B" + l1 + ",\n B" + l2 + ",\n B" + l3 + ",\n B" + l4 + ",\n B" + l5 + ",\n B" + l6 + ",\n B" + l7 + ",\n B" + l8 + "\n" + "};";
    Blockly.Python.setups_["char_"+vname]="lcd.createChar("+vname+",char_"+vname+");";
	return ""
};
//////////////
Blockly.Blocks["lcd_aff_symbole"]={init:function(){
        this.setColour("#4b009f");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.lcd_aff_symbole).appendField(new Blockly.FieldDropdown(Blockly.Msg.char_lcd),"c_char");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_line).appendField(new Blockly.FieldDropdown(Blockly.Msg.ligne), "ligne");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_col).appendField(new Blockly.FieldDropdown(Blockly.Msg.colonne), "colonne");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.lcd_aff_symbole_tooltip)}
};
Blockly.Arduino["lcd_aff_symbole"]=function(block){
    var value_num_ligne=block.getFieldValue("ligne");
    var value_num_colonne=block.getFieldValue("colonne");
    var variable=block.getFieldValue("c_char");
    return "lcd.setCursor(" + value_num_colonne + "," + value_num_ligne + ");\nlcd.write(" + variable + ");\n"
};
//////////////
Blockly.Blocks["lcd"]={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/LCD.png', 48, 48, "*"))
    .appendField(Blockly.Msg.LCD);
        this.appendValueInput("rs").setAlign(Blockly.ALIGN_RIGHT).appendField("RS");
        this.appendValueInput("en").setAlign(Blockly.ALIGN_RIGHT).appendField("E");
        this.appendValueInput("d4").setAlign(Blockly.ALIGN_RIGHT).appendField("D4");
        this.appendValueInput("d5").setAlign(Blockly.ALIGN_RIGHT).appendField("D5");
        this.appendValueInput("d6").setAlign(Blockly.ALIGN_RIGHT).appendField("D6");
        this.appendValueInput("d7").setAlign(Blockly.ALIGN_RIGHT).appendField("D7");
        this.setColour("#4b009f");
        this.setTooltip(Blockly.Msg.LCD_tooltip);
        this.setHelpUrl(Blockly.Msg.LCD_SHIELD_PRINT_HELPURL);
    }
};
Blockly.Arduino["lcd"]=function(block){
    var v_rs=Blockly.Arduino.valueToCode(block, "rs", Blockly.Arduino.ORDER_ASSIGNMENT);
    var v_d4=Blockly.Arduino.valueToCode(block, "d4", Blockly.Arduino.ORDER_ASSIGNMENT);
    var v_d5=Blockly.Arduino.valueToCode(block, "d5", Blockly.Arduino.ORDER_ASSIGNMENT);
    var v_d6=Blockly.Arduino.valueToCode(block, "d6", Blockly.Arduino.ORDER_ASSIGNMENT);
    var v_d7=Blockly.Arduino.valueToCode(block, "d7", Blockly.Arduino.ORDER_ASSIGNMENT);
    var v_en=Blockly.Arduino.valueToCode(block, "en", Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.includes_["define_LiquidCrystal"]="#include <LiquidCrystal.h>";
    Blockly.Arduino.definitions_["var_LiquidCrystal lcd"]="LiquidCrystal lcd(" + v_rs + "," + v_en + "," + v_d4 + "," + v_d5 + "," + v_d6 + "," + v_d7 + ");";
    Blockly.Arduino.setups_["setup_lcd"]="lcd.begin(16,2);\n  lcd.clear();";
    return ''
};
Blockly.Python["lcd"]=function(block){
    var v_rs=Blockly.Python.valueToCode(block, "rs", Blockly.Python.ORDER_ASSIGNMENT);
    var v_d4=Blockly.Python.valueToCode(block, "d4", Blockly.Python.ORDER_ASSIGNMENT);
    var v_d5=Blockly.Python.valueToCode(block, "d5", Blockly.Python.ORDER_ASSIGNMENT);
    var v_d6=Blockly.Python.valueToCode(block, "d6", Blockly.Python.ORDER_ASSIGNMENT);
    var v_d7=Blockly.Python.valueToCode(block, "d7", Blockly.Python.ORDER_ASSIGNMENT);
    var v_en=Blockly.Python.valueToCode(block, "en", Blockly.Python.ORDER_ASSIGNMENT);
    Blockly.Python.includes_["define_LiquidCrystal"]="#include <LiquidCrystal.h>";
    Blockly.Python.definitions_["var_LiquidCrystal lcd"]="LiquidCrystal lcd(" + v_rs + "," + v_en + "," + v_d4 + "," + v_d5 + "," + v_d6 + "," + v_d7 + ");";
    Blockly.Python.setups_["setup_lcd"]="lcd.begin(16,2);\n  lcd.clear();";
    return ''
};
//////////////
Blockly.Blocks["LCD_Keypad_Shield_DFR_09"]={init:function(){
        this.setColour("#4b009f");
        this.setHelpUrl(Blockly.Msg.LCD_SHIELD_PRINT_HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.LCD_SHIELD_PRINT_TEXT);
        this.appendValueInput("TEXT1", "String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_SHIELD_PRINT_INPUT1);
        this.appendValueInput("TEXT2", "String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_SHIELD_PRINT_INPUT2);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP)}
};
Blockly.Arduino["LCD_Keypad_Shield_DFR_09"]=function(block){
    var text1=Blockly.Arduino.valueToCode(block, "TEXT1", Blockly.Arduino.ORDER_UNARY_POSTFIX);
    var text2=Blockly.Arduino.valueToCode(block, "TEXT2", Blockly.Arduino.ORDER_UNARY_POSTFIX);
	if (text1[0]!='"') text1 = '"' + text1 + '"';
	if (text2[0]!='"') text2 = '"' + text2 + '"';
    return "lcd.setCursor(0,0);\nlcd.print(" + text1 + ");\nlcd.setCursor(0,1);\nlcd.print(" + text2 + ");\n"
};
Blockly.Python["LCD_Keypad_Shield_DFR_09"]=function(block){
    var text1=Blockly.Python.valueToCode(block, "TEXT1", Blockly.Python.ORDER_UNARY_POSTFIX);
    var text2=Blockly.Python.valueToCode(block, "TEXT2", Blockly.Python.ORDER_UNARY_POSTFIX);
	if (text1[0]!='"') text1 = '"' + text1 + '"';
	if (text2[0]!='"') text2 = '"' + text2 + '"';
    return "lcd.setCursor(0,0)\nlcd.print(" + text1 + ")\nlcd.setCursor(0,1)\nlcd.print(" + text2 + ")\n"
};
//////////////
Blockly.Blocks["LCD_Keypad_Shield_DFR_09_lc"]={init:function(){
	var prog = window.localStorage.prog;
    this.setColour("#4b009f");
    this.setHelpUrl(Blockly.Msg.LCD_SHIELD_PRINT_HELPURL);
	if (prog != "python") {
        this.appendDummyInput().appendField(Blockly.Msg.LCD_SHIELD_PRINT_TEXT);
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_line).appendField(new Blockly.FieldDropdown(Blockly.Msg.ligne), "ligne");
        this.appendValueInput("TEXT4", "String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_col).appendField(new Blockly.FieldDropdown(Blockly.Msg.colonne), "colonne");
	} else {
		this.appendValueInput("TEXT4", "String").appendField(Blockly.Msg.LCD_SHIELD_PRINT_TEXT);
	}	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.LCD_SHIELD_PRINT_TEXT_tooltip)}
};
Blockly.Arduino["LCD_Keypad_Shield_DFR_09_lc"]=function(block){
    var value_num_ligne=block.getFieldValue("ligne");
    var value_num_colonne=block.getFieldValue("colonne");
    var text4=Blockly.Arduino.valueToCode(block, "TEXT4", Blockly.Python.ORDER_UNARY_POSTFIX);
	var code = "lcd.setCursor(" + value_num_colonne + "," + value_num_ligne + ");\nlcd.print(";
	if (text4[0]!='"') text4 = '"' + text4 + '"';
    return  code + text4 + ");\n"
};
Blockly.Python["LCD_Keypad_Shield_DFR_09_lc"]=function(block){
    var text4=Blockly.Python.valueToCode(block, "TEXT4", Blockly.Python.ORDER_UNARY_POSTFIX);
	var code = "setText(";
	if (text4[0]!='"') text4 = '"' + text4 + '"';
    return  code + text4 + ")\n"
};
//////////////
Blockly.Blocks["LCD_Keypad_Shield_DFR_09_RAZ"]={init:function(){
        this.setColour("#4b009f");
        this.setHelpUrl(Blockly.Msg.LCD_SHIELD_PRINT_HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.LCD_raz);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.LCD_raz_tooltip)}
};
Blockly.Arduino["LCD_Keypad_Shield_DFR_09_RAZ"]=function(block){
    return "lcd.clear();\n"
};
Blockly.Python["LCD_Keypad_Shield_DFR_09_RAZ"]=function(block){
    return 'setText("")\n'
};
  ///////////
 /*  del  */
///////////
Blockly.Blocks["digital_write"]={init:function(){
    this.setColour("#4b009f");
    this.setHelpUrl(Blockly.Msg.HELPURL);
    this.appendValueInput("PIN", "Number").setCheck("Number").appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF), "STAT").appendField(Blockly.Msg.del);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.del_tooltip)}
};
Blockly.Arduino["digital_write"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat=block.getFieldValue("STAT");
    Blockly.Arduino.setups_["setup_output_" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
    return "digitalWrite(" + dropdown_pin + ", " + dropdown_stat + ");\n";
};
Blockly.Python["digital_write"]=function(block){
	var dropdown_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
    var dropdown_stat=block.getFieldValue("STAT") == "HIGH" ? "1" : "0";
    Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.definitions_["pin_"+dropdown_pin]="BROCHE_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.OUT)";
    return "BROCHE_"+dropdown_pin+".value("+dropdown_stat+")\n"
};
//////////////
Blockly.Blocks["inout_buildin_led"]={init:function(){
        this.setColour("#4b009f");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF), "STAT").appendField(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP)}
};
Blockly.Arduino["inout_buildin_led"]=function(block){
    var dropdown_stat=block.getFieldValue("STAT");
	var card=window.localStorage.card;
    Blockly.Arduino.setups_["setup_output_13"]="pinMode("+profile[card].BUILTIN_LED+", OUTPUT);";
    var code="digitalWrite("+profile[card].BUILTIN_LED+", " + dropdown_stat + ");\n";
    return code
};
Blockly.Python["inout_buildin_led"]=function(block){
    var dropdown_stat=block.getFieldValue("STAT") == "HIGH" ? "1" : "0";
	var card=window.localStorage.card;
    Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.definitions_["pin_"+profile[card].BUILTIN_LED]="BROCHE_"+profile[card].BUILTIN_LED+" = Pin("+profile[card].BUILTIN_LED+", Pin.OUT)";
    return "BROCHE_"+profile[card].BUILTIN_LED+".value("+dropdown_stat+")\n"
};
//////////////
Blockly.Blocks['rvb_init']={init:function() {
	var card=window.localStorage.card;
    this.appendDummyInput() .appendField(new Blockly.FieldImage('media/rgb.png', 48, 48, "*")) .appendField(Blockly.Msg.rvb_init);
    this.appendDummyInput() .setAlign(Blockly.ALIGN_RIGHT) .appendField("R").appendField(new Blockly.FieldDropdown(profile[card].dropdownPWM), "rouge");
    this.appendDummyInput() .setAlign(Blockly.ALIGN_RIGHT)  .appendField("G").appendField(new Blockly.FieldDropdown(profile[card].dropdownPWM), "vert");
    this.appendDummyInput() .setAlign(Blockly.ALIGN_RIGHT) .appendField("B").appendField(new Blockly.FieldDropdown(profile[card].dropdownPWM), "bleu");
    this.setInputsInline(true);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.rvb_init_tooltip);
    this.setHelpUrl('http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ReferenceMaxi')}
};
Blockly.Arduino['rvb_init'] = function(block) {
  var value_rouge = block.getFieldValue('rouge');
  var value_vert = block.getFieldValue('vert');
  var value_bleu = block.getFieldValue('bleu');
  Blockly.Arduino.variables_['rvb_'+value_rouge] = '#define redPin '+value_rouge+'\n#define greenPin '+value_vert+'\n#define bluePin '+value_bleu;
  Blockly.Arduino.userFunctions_['rvb_'+value_rouge] = 'void setColor(int redValue, int greenValue, int blueValue) {\n  analogWrite(redPin, redValue);\n  analogWrite(greenPin, greenValue);\n  analogWrite(bluePin, blueValue);\n}';
  Blockly.Arduino.setups_['rvb_'+value_rouge]='pinMode(greenPin, OUTPUT);\n  pinMode(redPin, OUTPUT);\n  pinMode(bluePin, OUTPUT);';
  return '';
};
Blockly.Python['rvb_init'] = function(block) {
	var value_rouge = block.getFieldValue('rouge');
	var value_vert = block.getFieldValue('vert');
	var value_bleu = block.getFieldValue('bleu');
	Blockly.Python.imports_['pin']='from  machine import Pin';
	Blockly.Python.imports_['pwm']='from  machine import PWM';
	Blockly.Python.definitions_['rvb_'+value_rouge+"_"+value_vert+"_"+value_bleu] = 'redPin = PWM(Pin('+value_rouge+'))\ngreenPin = PWM(Pin('+value_vert+'))\nbluePin = PWM(Pin('+value_bleu+'))';
	Blockly.Python.userFunctions_['rvb_'+value_rouge] = 'def setColor(redValue, greenValue, blueValue):\n  redPin.duty(redValue)\n  greenPin.duty(greenValue)\n  bluePin.duty(blueValue)\n';
    return '';
};
//////////////
Blockly.Blocks['rvb_set']={init:function() {
    this.appendDummyInput()  .appendField(Blockly.Msg.rvb_set);
    this.appendValueInput("r")  .setCheck("Number") .setAlign(Blockly.ALIGN_RIGHT) .appendField("R");
    this.appendValueInput("v") .setCheck("Number") .setAlign(Blockly.ALIGN_RIGHT) .appendField("G");
    this.appendValueInput("b") .setCheck("Number").setAlign(Blockly.ALIGN_RIGHT)  .appendField("B");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b009f");
    this.setTooltip(Blockly.Msg.rvb_set_tooltip);
    this.setHelpUrl('http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ReferenceMaxi')}
};
Blockly.Arduino['rvb_set'] = function(block) {
  var value_r = Blockly.Arduino.valueToCode(block, 'r', Blockly.Arduino.ORDER_ATOMIC);
  var value_v = Blockly.Arduino.valueToCode(block, 'v', Blockly.Arduino.ORDER_ATOMIC);
  var value_b = Blockly.Arduino.valueToCode(block, 'b', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'setColor('+value_r+','+value_v+','+value_b+');\n';
  return code;
};
Blockly.Python['rvb_set'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
  var value_v = Blockly.Python.valueToCode(block, 'v', Blockly.Python.ORDER_ATOMIC);
  var value_b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
  var code = 'setColor('+value_r+','+value_v+','+value_b+')\n';
  return code;
}
//////////////
Blockly.Blocks["blink"]={init:function(){
        this.appendDummyInput().appendField(Blockly.Msg.blink).appendField(new Blockly.FieldDropdown(Blockly.Msg.menublink), "speed");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#4b009f");
        this.setTooltip(Blockly.Msg.blink_tooltip);
        this.setHelpUrl(Blockly.Msg.HELPURL)}
};
Blockly.Arduino["blink"]=function(block){
	var card=window.localStorage.card;
    var dropdown_speed=block.getFieldValue("speed");
    Blockly.Arduino.setups_["setup_output_13"]="pinMode("+profile[card].BUILTIN_LED+", OUTPUT);";
    return "digitalWrite("+profile[card].BUILTIN_LED+", HIGH);\ndelay(" + dropdown_speed + ");\ndigitalWrite("+profile[card].BUILTIN_LED+", LOW);\ndelay(" + dropdown_speed + ");\n"
};
Blockly.Python["blink"]=function(block){
	var card=window.localStorage.card;
    var dropdown_speed=block.getFieldValue("speed");
	Blockly.Python.imports_["time"]="import time";
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.definitions_["pin_"+profile[card].BUILTIN_LED]="BROCHE_"+profile[card].BUILTIN_LED+" = Pin("+profile[card].BUILTIN_LED+", Pin.OUT)";
    return "BROCHE_"+profile[card].BUILTIN_LED+".value(0)\ntime.sleep_ms("+dropdown_speed+")\nBROCHE_"+profile[card].BUILTIN_LED+".value(1)\ntime.sleep_ms("+dropdown_speed+")\n"
};
//////////////
Blockly.Blocks["bargraphe"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage('media/LEDbar.png', 48, 48, "*"))
			.appendField(Blockly.Msg.bargraphe);
        this.appendValueInput("clk", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField("DCKI");
        this.appendValueInput("data", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField("DI");
        this.setColour("#4b009f");
        this.setTooltip(Blockly.Msg.bargraphe_tooltip);
        this.setHelpUrl("http://wiki.seeed.cc/Grove-LED_Bar/")}
};
Blockly.Arduino["bargraphe"]=function(block){
    var _clock=Blockly.Arduino.valueToCode(block, 'clk', Blockly.Arduino.ORDER_ATOMIC);
    var _data=Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_["ledbar"]="unsigned char _state[]={0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};";
    Blockly.Arduino.codeFunctions_["ledbar"]="void sendData(unsigned int data) {\n  for (unsigned char i=0; i < 16; i++){\n    unsigned int state=(data&0x8000) ? HIGH : LOW;\n    digitalWrite(" + _data + ", state);\n    state=digitalRead(" + _clock + ") ? LOW : HIGH;\n    digitalWrite(" + _clock + ", state);\n    data <<= 1;\n  }\n}\nvoid setData(unsigned char _state[]) {\n  sendData(0x00);\n  for (unsigned char i=0; i<10; i++) sendData(_state[10-i-1]);\n  sendData(0x00);\n  sendData(0x00);\n  digitalWrite(" + _data + ", LOW);\n  delayMicroseconds(10);\n  for (unsigned char i=0; i<4; i++){\n    digitalWrite(" + _data + ", HIGH);\n    digitalWrite(" + _data + ", LOW);\n  }\n}\nvoid SetLevel(float level) {\n  level=max(0, min(10, level));\n  level *= 8;\n  for (byte i=0; i<10; i++) {\n    _state[i]=(level>8) ? ~0 : (level>0) ? ~(~0 << byte(level)) : 0;\n    level -= 8;\n  };\n  setData(_state);\n}";
    Blockly.Arduino.setups_["ledbar"]="pinMode(" + _clock + ", OUTPUT);\n  pinMode(" + _data + ", OUTPUT);";
    return ""
};
Blockly.Python["bargraphe"]=function(block){
    var _clock=Blockly.Python.valueToCode(block, 'clk', Blockly.Python.ORDER_ATOMIC);
    var _data=Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.imports_["MY9221"]="import MY9221";
    Blockly.Python.definitions_["pin_"+_clock+"_"+_data]="ledbar = MY9221(di=Pin("+_data+"), dcki=Pin("+_clock+"))";
    return ""
};
//////////////
Blockly.Blocks["bargraphe_allume"]={init:function(){
        this.appendValueInput("del", "Number").appendField(Blockly.Msg.bargraphe_allume);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#4b009f");
        this.setTooltip(Blockly.Msg.bargraphe_allume_tooltip);
        this.setHelpUrl("http://wiki.seeed.cc/Grove-LED_Bar/");
    }
};
Blockly.Arduino["bargraphe_allume"]=function(block){
    var level=Blockly.Arduino.valueToCode(block, 'del', Blockly.Arduino.ORDER_ATOMI);
    return "SetLevel(" + level + ");\n"
};
Blockly.Python["bargraphe_allume"]=function(block){
    var level=Blockly.Python.valueToCode(block, 'del', Blockly.Python.ORDER_ATOMI);
    return "ledbar.level(" + level + ", 0x08)"
};