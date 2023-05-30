'use strict';
goog.provide ( 'Blockly.Msg.fr');
goog.require ( 'Blockly.Msg');
// Electron window
Blockly.Msg.ledstrip_WS2811B_nameR = "Адресная лента WS2811";
Blockly.Msg.Hardware_monitor = "Hardware monitor - Чтение!";
Blockly.Msg.com1 = "Выберите порт USB ";
Blockly.Msg.com2 = "Укажите USB порт платы Arduino" ;
Blockly.Msg.check = "Проверка...";
Blockly.Msg.upload = "Загрузка...";
Blockly.Msg.error = "ОШИБКА: Блоки не связаны";
Blockly.Msg.verif = "Проверьте код ";
Blockly.Msg.save = "Сохранить как";
//Blockly.Msg.update = "Обновление";
//Blockly.Msg.new_update = "Более новая версия доступна для скачивания, обновить сейчас?" ;
Blockly.Msg.yes = "да";
Blockly.Msg.no = "нет";
//Blockly.Msg.uptodate = "Обновление успешно!" ;
//Blockly.Msg.download = "Загрузка завершена, приложение будет обновлено и перезапущено ...";
// common to all blocks
//Blockly.Msg.HELPURL = "site-help/001.html"; // информация о блоках системы ядра
Blockly.Msg.pin = "на pin";
Blockly.Msg._AT = "Значение";
Blockly.Msg.AV = "вперёд";
Blockly.Msg.AR = "назад";
Blockly.Msg.high = "HIGH"; // do not translate
Blockly.Msg.low = "LOW"; // do not translate
Blockly.Msg.right = "право";
Blockly.Msg.left = "лево";
Blockly.Msg.LetR = "право и лево";
Blockly.Msg.direction = "направление";
Blockly.Msg.vitesse = "скорость";
// categories (menu)
Blockly.Msg.CAT_STOCKAGE = "Хранилище";
Blockly.Msg.CAT_numerique = "Цифровой";
Blockly.Msg.CAT_analogique = "Аналоговый";
Blockly.Msg.CAT_wifi = "Интернет";
Blockly.Msg.CAT_TAB = "Массивы";
Blockly.Msg.CAT_VARIABLESN = "Переменные";
Blockly.Msg.CAT_list = "List";
Blockly.Msg.CAT_servo = "Servo";
Blockly.Msg.CAT_del = "LED";
Blockly.Msg.CAT_LOGIC = "Логика";
Blockly.Msg.CAT_MATH = "Математика";
Blockly.Msg.CAT_TEXT = "Текст";
Blockly.Msg.CAT_VARIABLES = "Простые";
Blockly.Msg.CAT_FUNCTIONS = "Функции";
Blockly.Msg.CAT_ARDUINO = "Основные";
Blockly.Msg.CAT_ARDUINO_IN = "Входы / Выходы";
Blockly.Msg.CAT_ARDUINO_OUT = "Exit";
Blockly.Msg.CAT_ARDUINO_TIME = "Время";
Blockly.Msg.CAT_actionneur = "Моторы";
Blockly.Msg.CAT_com = "Communication";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL = "Монитор порта";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL = "- Soft Serial";
Blockly.Msg.CAT_ARDUINO_moteur="↻ Motor Stepper";
Blockly.Msg.CAT_ultrason = "⇣ Sensor";
Blockly.Msg.CAT_bluetooth = "☏ Bluetooth";
Blockly.Msg.CAT_ARDUINO_matrice8x8 = "░ LED Mouth";
Blockly.Msg.CAT_ARDUINO_matrice16x8 = "░ LED Eyes";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD = "▀ LCD Screen";
Blockly.Msg.CAT_iot = "☁ IoT";
Blockly.Msg.CAT_html = "✉ HTML";
Blockly.Msg.CAT_DFPLAYER = "♫ Audio";
Blockly.Msg.CAT_OTTO = "⊟ Otto";
Blockly.Msg.CAT_OTTOH = "⊟ Humanoid";
Blockly.Msg.CAT_OLED_U8G = "▀ OLED";
Blockly.Msg.CAT_NEOPIXEL = "☄ Neopixel";

Blockly.Msg.CAT_MODEMX = "Модули связи";
Blockly.Msg.CAT_BITEPROM = "Место хранения";
Blockly.Msg.CAT_MOTORI = "Моторы";
Blockly.Msg.CAT_SENSOROUTP = "Сенсоры входа";
Blockly.Msg.CAT_SENSORINPT = "Сенсоры выхода";
Blockly.Msg.CAT_SENSORDRUGIE = "Другие сенсоры";
Blockly.Msg.CAT_SENSORRECORD = "Аудио модули";
Blockly.Msg.CAT_INDIKATORI = "Индикаторы";
Blockly.Msg.CAT_DISPLAYU = "Дисплей LCD s";
Blockly.Msg.CAT_TFTDISPLAYU = "TFT Дисплей";
Blockly.Msg.CAT_LEONARDO = "Леонардо";
Blockly.Msg.CAT_DISPLAYU_TVVGA = "TV VGA";
Blockly.Msg.CYCLESAR = "Циклы";
Blockly.Msg.ESPWEB = "ESP 8266 12F";
//Wireless
Blockly.Msg.esp8266_init_tooltip = "initialization of the wifi module and connection with the indicated parameters";
Blockly.Msg.esp8266_1 = "Esp 8266";
Blockly.Msg.esp8266_2 = "SSID";
Blockly.Msg.esp8266_3 = "key";
Blockly.Msg.esp8266_4 = "IP";
Blockly.Msg.esp8266_5 = "gateway";
Blockly.Msg.esp8266_6 = "mask";
Blockly.Msg.esp8266_7 = [["client", "client"], ["server", "server"]];
Blockly.Msg.esp8266_8 = "port";
Blockly.Msg.esp8266_9 = [["dynamic", "dynamic"], ["static", "static"]];
Blockly.Msg.esp8266_10 = "address";
Blockly.Msg.esp8266_recept_tooltip = "reception";
//Blockly.Msg.esp8266_url = " ";
Blockly.Msg.esp8266_html_tooltip = "";
Blockly.Msg.esp8266_send_html_tooltip = "";
Blockly.Msg.esp8266_send_html = "send HTML page";
Blockly.Msg.esp8266_start_tooltip = "";
Blockly.Msg.esp8266_start = "start server";
Blockly.Msg.esp8266_request_tooltip = "";
Blockly.Msg.esp8266_request = "if in the query we find";
Blockly.Msg.esp8266_request_container = "we find";
//INTERRUPTION
Blockly.Msg.LKL_ATTACHINTERRUPT_PIN = 'Interrupt: when a';
Blockly.Msg.LKL_DETACHINTERRUPT_PIN = "disable interrupt on pin";
Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT = "Specifies an action to take when an external interrupt (4 possible modes) occurs on pin 2 or 3";
Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT = "Disable the previously specified external interrupt";
Blockly.Msg.LKL_MODE = 'is detected on the pin';
// FIELDDROPDOWN
Blockly.Msg.note = [[ "DO \u2083", "261"], [ "RE \u2083", "293"], [ "MI \u2083", "329"], [ "FA \u2083", "349"], [ "SOL \u2083", "392"], [ "LA \u2083", "440"], [ "SI \u2083", "493"], [ "DO \u2084", "523 "], [" RE \u2084 "," 587 "], [" MI \u2084 "," 659 "], [" FA \u2084 "," 698 "], [" SOL \u2084 "," 784 "], [ "LA \u2084", "880"]];
Blockly.Msg.tempo = [["\u266B", "125"], ["\u266A", "250"], ["\u2669", "500"], ["𝅗𝅥", "1000"], ["𝅝", "2000"]];
Blockly.Msg.on_off = [["on", "LOW"], ["off", "HIGH"]];
Blockly.Msg.menublink = [["slowly", "1000"], ["fast", "100"]];
Blockly.Msg.AV_AR = [[Blockly.Msg.AV, "FORWARD"], [Blockly.Msg.AR, "BACKWARD"]]; // do not translate
Blockly.Msg.times = [["секунды", "s"], ["миллисекунды", "m"], ["микросекунды", "u"]];
Blockly.Msg.time = [["seconds", "s"], ["milliseconds", "m"]];
Blockly.Msg.char_lcd = [[ "# 1", "1"], [ "# 2", "2"], [ "3", "3"], [ "# 4", "4"], [ "# 5", "5"], [ "# 6", "6"], [ "No. 7", "7"], [ "# 8", "8 "]];
Blockly.Msg.rxtx = [[ "2", "2"], [ "3", "3"], [ "4", "4"], [ "5", "5"], [ "6 "," 6 "], [" 7 "," 7 "], [" 8 "," 8 "], [" 9 "," 9 "], [" 10 "," 10 "], [" 11 "," 11 "], [" 12 "," 12 "], [" 13 "," 13 "]];
Blockly.Msg.FIELDDROPDOWN = [["1(high state)", Blockly.Msg.high], ["0(low state)", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_0_1 = [["1", Blockly.Msg.high], ["0", Blockly.Msg.low]];
Blockly.Msg.ligne = [["1", "0"], ["2", "1"]];
Blockly.Msg.colonne = [[ "1", "0"], [ "2", "1"], [ "3", "2"], [ "4", "3"], [ "5 "," 4 "], [" 6 "," 5 "], [" 7 "," 6 "], [" 8 "," 7 "], [" 9 "," 8 "], [" 10 "," 9 "], [" 11 "," 10 "], [" 12 "," 11 "], [" 13 "," 12 "], [" 14 "," 13 "], [" 15 "," 14 "], [" 16 "," 15 "]];
Blockly.Msg.FIELDDROPDOWN_ONOFF = [["turn on", Blockly.Msg.high], ["turn off", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_ONOFF_matrice = [["1", "true"], ["0", "false"]];
Blockly.Msg.FIELDDROPDOWN_av_ar = [[Blockly.Msg.AV, Blockly.Msg.high], [Blockly.Msg.AR, Blockly.Msg.low]];
Blockly.Msg.LKL_DROPDOWN = [['rising edge', 'RISING'], ['falling edge', 'FALLING'], ['changing state', 'CHANGE'], ['low state', Blockly. Msg.low]];
Blockly.Msg.irq = [['rising edge', 'Pin.IRQ_RISING'], ['falling edge', 'Pin.IRQ_FALLING'], ['high state', 'Pin.IRQ_HIGH_LEVEL'], ["low state "," Pin.IRQ_LOW_LEVEL "]];
Blockly.Msg.menudht = [["humidity", "h"], ["temperature", "t"]];
Blockly.Msg.couleur = [["blue", "blue"], ["yellow", "yellow"], ["red", "red"], ["green", "green"]];
Blockly.Msg.sens = [["forward", "a"], ["turn right", "d"], ["turn left", "g"]];
//sensor
Blockly.Msg.VL53L0X="Laser distance sensor";
Blockly.Msg.VL53L0X_tooltip="initialize sensor.\nSensor <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.VL53L0X_distance="distance measured by laser";
Blockly.Msg.VL53L0X_distance_tooltip="VL530X :\nreturn Distance measured by laser in mm";
Blockly.Msg.bme280="Atmospheric pressure sensor";
Blockly.Msg.bme280_tooltip="initialize sensor.\nSensor <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.bme280_pressure="atmospheric pressure";
Blockly.Msg.bme280_pressure_tooltip="BME280 :\nreturn atmospheric pressure in hPa";
Blockly.Msg.inter="switch is";
Blockly.Msg.inter_tooltip="returns true (false) if the switch is (is not) at the indicated position";
Blockly.Msg.mc005="presence detected on the pin";
Blockly.Msg.mc005_tooltip="MC005:\nreturns true (false) if a presence is (is not) detected";
Blockly.Msg.bp = "button pressed on the pin";
Blockly.Msg.bp_tooltip = "returns true (false) if a pushbutton is (is not) pressed";
Blockly.Msg.dht11_tooltip="DHT11 :\nreturns the humidity of the air (from 20 to 80%) or \n the temperature (from 2 to 50�C)";
Blockly.Msg.dht22_tooltip = "DHT22: \nreturns the humidity of the air (from 0 to 100%) or \n the temperature (from -40 to 80 � C)";
Blockly.Msg.suiveur_ligne = "black line detected on the pin";
Blockly.Msg.suiveur_ligne_tooltip = "CAP227: \nreturns true (false) if a black line is (is not) detected";
Blockly.Msg.light = "brightness on the pin";
Blockly.Msg.light_tooltip = "returns a value depending on the brightness \n0: darkness \n255: full light";
Blockly.Msg.hum = "soil moisture on the pin";
Blockly.Msg.hum_tooltip = "CAP 615: \nreturns soil moisture from 0 to 100%";
Blockly.Msg.light_tooltip = "returns a value depending on the brightness \n0: darkness \n255: full light";
Blockly.Msg.grove_ldr = "brightness on the pin";
Blockly.Msg.grove_ldr_tooltip = "returns the measured brightness \n0: no light \n100: very intense light";
Blockly.Msg.potar = "cursor position on the pin";
Blockly.Msg.potar_tooltip = "returns a value based on the cursor position \n0: cursor left \n255: cursor right";
Blockly.Msg.lm35 = "temperature on the pin";
Blockly.Msg.lm35_tooltip = "LM35: \nreturns the measured temperature in degrees celcius (from 0 to 80 �)";
Blockly.Msg.ultrason_1 = "distance < limit";
Blockly.Msg.ultrason_2 = "returns a High state if the measured distance is less than the limit";
Blockly.Msg.ultrason_distance1 = "distance measured by ultrasound";
Blockly.Msg.ultrason_tooltip = "HC-SR04: \nSound sensor that allows to make distance measurements (of 3 cm and 4 m) \nindicate the pins of the Arduino to which will be connected TRIG and ECHO";
Blockly.Msg.ultrason = "ultrasound pins";
Blockly.Msg.ultrason_distance2 = "HC-SR04: \nreturns the distance measured in cm by the ultrasonic detector";
//Blockly.Msg.ultrason_helpurl = ""; // do not translate
Blockly.Msg.pir = "motion detected ";
Blockly.Msg.feu = "flame detected ";
Blockly.Msg.presence = "obstacle detected ";
Blockly.Msg.appui = "touch ";
Blockly.Msg.pir_tooltip = "HC-SR501: \nreturns true (false) if a presence is (is not) detected";
Blockly.Msg.feu_tooltip = "CAP168: \nreturns true (false) if a flame is (is not) detected";
Blockly.Msg.presence_tooltip = "CAP711: \nreturns true (false) if a contact has (did not) take place";
Blockly.Msg.appui_tooltip = "CAP831: \nreturns true (false) if a support is (is not) detected";
// bluetooth
Blockly.Msg.bluetooth1 = "if the data received by bluetooth";
Blockly.Msg.bluetooth1_tooltip = "bluetooth data reception \nconnecting module HC-06 to pins 0 and 1 \net cross Rx and Tx pins";
Blockly.Msg.bluetooth2 = "send by bluetooth";
Blockly.Msg.bluetooth2_tooltip = "sends data via bluetooth \nconnecting module HC-06 to pins 0 and 1 \net cross pins Rx and Tx";
Blockly.Msg.bluetooth_init_tooltip = "";
//Blockly.Msg.bluetooth_helpurl = " "; // do not translate
//LCD screen
Blockly.Msg.lcd_fond = "bottom";
Blockly.Msg.LCD = "LCD screen";
Blockly.Msg.LCDi2c_tooltip = "initializes the 2-line, 16-character I2C LCD with RGB backlight. \n Displayer <-> Arduino \nSDA <--------> A4 \nSCL <- -------> A5 ";
Blockly.Msg.LCD_tooltip = "initializes the LCD, 2 lines and 16 characters, indicating the pins to connect";
//Blockly.Msg.LCD_SHIELD_PRINT_HELPURL = " ";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT = "show on LCD";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT_tooltip = "display the text in the specified location";
Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP = "write the text (s) on the LCD screen";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT1 = "line 1";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT2 = "line 2";
Blockly.Msg.LCD_line = "line";
Blockly.Msg.LCD_col = "column";
Blockly.Msg.LCD_raz = "erase the LCD screen";
Blockly.Msg.LCD_raz_tooltip = "clear screen";
Blockly.Msg.lcd_aff_symbole = "display the symbol";
Blockly.Msg.lcd_aff_symbole_tooltip = "show the symbol that has been defined before";
Blockly.Msg.lcd_symbole = "define the symbol";
Blockly.Msg.lcd_symbole_tooltip = "definition of a character for the LCD: \n 0 turns off a pixel \n 1 lights a pixel";
// structure
Blockly.Msg.loop = "Программа";
Blockly.Msg.init = "Настройки";
//Blockly.Msg.base_setup_loop = "The initialization function: \nIt is used to initialize the variables, the direction of the pins ... \nIt is executed only once \nThe loop function: \nThis is the main part of the program, all the blocks placed here will run in loop and indefinitely (several thousand times per second) ";
//Blockly.Msg.loop_tooltip = "all blocks placed here will run in a loop and indefinitely (several thousand times per second)";
//Blockly.Msg.begin_tooltip = "this block is used to define the order in which the program should execute";
Blockly.Msg.begin = "Старт";
Blockly.Msg.def = "Объявление";
//Blockly.Msg.def_tooltip = "all the blocks placed here will only be executed once, this is where the different sensors or actuators are configured";
Blockly.Msg.END = "Финиш";
//Blockly.Msg.END_tooltip = "Stop the program, blocks placed afterwards will be ignored";
//Blockly.Msg.code_tooltip = "Type an instruction here that is not in blocks";
//matrix
Blockly.Msg.matriceLC = "put the LED, line";
Blockly.Msg.matrice_create_aff = "Create block 'display symbol %1'";
Blockly.Msg.matrice_create_symbole = "Create the block 'set the symbol %1'";
Blockly.Msg.matrice = "matrix";
Blockly.Msg.matrice8x8_tooltip = "Initialisation of the matrix to 64 LEDs, it is necessary to indicate the pins of the arduino to which will be connected DIN, CLK, CS";
Blockly.Msg.matrice8x8_symbole = "define the symbol";
Blockly.Msg.matrice8x8_symbole_tooltip = "definition of a symbol for the matrix: \n 0 turn off an LED \n 1 turn on an LED";
Blockly.Msg.matrice8x8_efface = "erase the matrix";
Blockly.Msg.matrice8x8_aff = "display the symbol";
Blockly.Msg.matrice8x8_binaire_tooltip = "1 turns on an LED of the matrix and 0 turns it off";
Blockly.Msg.matrice8x8_del_tooltip = "Turns on (off) an LED in the array indicating its coordinates \nCaution dialing starts at 0";
Blockly.Msg.matrice8x8_aff_tooltip = "Display the symbol that has been previously defined";
Blockly.Msg.matrice8x8_efface_tooltip = "Turn off all LEDs in the matrix";
//Blockly.Msg.matrice8x8_helpurl = " ";
Blockly.Msg.matrice16x8_tooltip = "Initialization of the array to 128 LEDs. \nMatrix <-> Arduino \nSDA <--------> A4 \nSCL <--------> A5";
Blockly.Msg.matrice16x8_symbole = "define the symbol";
Blockly.Msg.matrice16x8_symbole_tooltip = "definition of a symbol for the matrix: \n 0 turns off an LED \n 1 turns on an LED";
Blockly.Msg.matrice16x8_efface = "turn off the LEDs of the matrix";
Blockly.Msg.matrice16x8_aff = "display the symbol";
Blockly.Msg.matrice16x8_binaire_tooltip = "1 turns on an LED of the matrix and 0 turns it off";
Blockly.Msg.matrice16x8_del_tooltip = "Turns on (off) an LED in the matrix indicating its coordinates \nCaution dialing starts at 0";
Blockly.Msg.matrice16x8_aff_tooltip = "Display the symbol that has been previously defined";
Blockly.Msg.matrice16x8_efface_tooltip = "Turn off all LEDs in the matrix";
//Blockly.Msg.matrice16x8_helpurl = "";
//time
Blockly.Msg.millis ="время прошло в";
Blockly.Msg.millis_start="начать хронометраж в";
//Blockly.Msg.millis_tooltip="";
//Blockly.Msg.millis_start_tooltip="";
//Blockly.Msg.ARDUINO_INOUT_Pulsein = "returns the duration in microseconds of a UP or DOWN pulse applied to a pin.If the parameter value is HIGH, the block waits for the pin to go HIGH, starts then the timing, waits for the pin to go back to the LOW level and then stop the timing ";
Blockly.Msg.ARDUINO_BASE_DELAY = "Задержка";
//Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "Specify the wait time in seconds, milliseconds or microseconds. \nThe program does nothing else during this time";
Blockly.Msg.millis1 = "продолжительность в";
Blockly.Msg.millis2 = "с момента запуска программы";
//Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP = "returns the duration in milliseconds, seconds or microseconds since the program started";
Blockly.Msg.ARDUINO_PULSEIN = "Длительность сигнала";
//Blockly.Msg.tempo_helpurl = " ";
//Blockly.Msg.tempo_tooltip = "This block checks if the indicated time has arrived, if it is the case then it executes the blocks placed inside .. Unlike the block 'to wait' this one is not blocking." ;
Blockly.Msg.tempo1 = "Когда";
//OLED
Blockly.Msg.lp2i_u8g_draw_string = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_string_Text = "text to display =";
Blockly.Msg.lp2i_u8g_draw_string_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_draw_string_Y = "line y (63 max) =";
Blockly.Msg.lp2i_u8g_draw_4strings = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_4strings_texts_to_display = "texts to display :";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line1 = "line 1 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line2 = "line 2 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line3 = "line 3 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line4 = "line 4 =";
Blockly.Msg.lp2i_u8g_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_print_N = "Number to display ="
Blockly.Msg.lp2i_u8g_print_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_print_Y = "line y (63 max) =";
Blockly.Msg.lp2i_u8g_4draw_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_4draw_print_to_display = "to display :";
Blockly.Msg.lp2i_u8g_4draw_print_Text_line1 = "line 1 =";
Blockly.Msg.lp2i_u8g_4draw_print_N1 = "Number 1 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line2 = "line 2 =";
Blockly.Msg.lp2i_u8g_4draw_print_N2 = "Number 2 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line3 = "line 3 =";
Blockly.Msg.lp2i_u8g_4draw_print_N3 = "Number 3 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line4 = "line 4 =";
Blockly.Msg.lp2i_u8g_4draw_print_N4 = "Number 4 (at end) ="
// LED
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "the LED on the board";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "Turn off or turn on the LED on the Arduino board";
Blockly.Msg.blink = "blink the board LED";
Blockly.Msg.blink_tooltip = "The board LED flashes 1 or 10 times per second";
Blockly.Msg.del = "the LED in pin";
Blockly.Msg.del_tooltip = "turns on (off) the LED connected to the indicated pin";
Blockly.Msg.bargraphe = "bargraph";
Blockly.Msg.bargraphe_allume="turn on LEDs to";
Blockly.Msg.bargraphe_allume_tooltip="0 lights no LEDs \n2,5 lights up the first 2 LEDs and the 3rd half turns on \n10 turns on all LEDs";
Blockly.Msg.bargraphe_tooltip = "bargraph module composed of 10 LEDs (8 green, 1 yellow and 1 red), it is necessary to indicate the pins of the arduino on which will be connected DCKI and DI";
Blockly.Msg.rvb_init="LED RGB";
Blockly.Msg.rvb_init_tooltip="indicate the PWM pins to connect to the RGB LED";
Blockly.Msg.rvb_set="show color";
Blockly.Msg.rvb_set_tooltip="displays a color indicating a value for the three components (red, green, blue)";
Blockly.Msg.pixel1 = "RGB NeoPixel";
Blockly.Msg.pixel2 = "update pixels";
Blockly.Msg.pixel3 = "with color";
Blockly.Msg.pixel4 = "number";
Blockly.Msg.pixel5 = "set pixel brightness to";
Blockly.Msg.pixel6 = "set the pixel";
Blockly.Msg.pixel1_tooltip="neopixel RGB module indicate the pin to be connected and the number of pixels";
Blockly.Msg.pixel2_tooltip="show changes made";
Blockly.Msg.pixel5_tooltip="adjusts pixel brightness (from 0 to 255)";
Blockly.Msg.pixel3_tooltip="choose the pixel to light and its color \ nCaution the numbering starts at 0";
// output
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "Цифровой Выход - Pin";
//Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "write a 0 or 1 logical state to a specific output";
//Blockly.Msg.toggle = "toggle the state of the pin";
//Blockly.Msg.toggle_tooltip = "Toggle: \n write a logical state 0 if before there was a state 1 (and vice versa) on the specified output";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "Аналоговый Выход - PWM Pin";
//Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "send a value between 0 and 255 on a specific output";
// input
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "Цифровой Вход - Pin";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUTR = "R Инвертировать сигнал";
Blockly.Msg.in_pullup = "R MK Инвертировать сигнал";
//Blockly.Msg.in_pullup_tooltip = "returns the logical state (0 or 1) of the indicated pin \nreturns 1 (high state) by default if pull-up enabled";
//Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "read logical state 0 or 1 of the digital pin";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "Аналоговый Вход - Pin";
//Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "returns a value between 0 and 1023";
// audio
Blockly.Msg.play = "play";
Blockly.Msg.play_tooltip = "play the note";
//Blockly.Msg.play_helpurl = "";
Blockly.Msg.beep = "beep on the pin";
Blockly.Msg.beep_TOOLTIP = "beeps (at 440Hz for 1s) on the selected pin";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "emit a sound on the pin";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "frequency (Hz)";
Blockly.Msg.ARDUINO_TONE_INPUT3 = "duration (ms)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "emit a sound on the selected pin, at the desired frequency and for the desired duration";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "stop the sound on the pin";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "stop the sound on the selected pin";
//Blockly.Msg.lp2i_mp3_helpurl = " ";
Blockly.Msg.lp2i_mp3_Volume = "volume [0-48]";
Blockly.Msg.lp2i_mp3_autoplay = "AutoPlay";
Blockly.Msg.lp2i_mp3 = "MP3 player";
Blockly.Msg.lp2i_mp3_tooltip = "DFPlayer Mini mp3: \ninitialization of the module, volume and operating mode \nModule MP3 <-> Arduino \nRx (2) <------------- -> Tx (1) ";
Blockly.Msg.lp2i_mp3_play = "play the mp3 file";
Blockly.Msg.lp2i_mp3_play_track_tooltip = "play the specified song";
Blockly.Msg.lp2i_mp3_play_tooltip = "plays the current song";
Blockly.Msg.lp2i_mp3_pause = "pause mp3 file";
Blockly.Msg.lp2i_mp3_pause_tooltip = "stop the current song";
Blockly.Msg.lp2i_mp3_prev = "read the previous mp3 file";
Blockly.Msg.lp2i_mp3_prev_tooltip = "play the previous track";
Blockly.Msg.lp2i_mp3_vol = "set the volume to";
Blockly.Msg.lp2i_mp3_vol_tooltip = "set the volume to the specified value [0-48]";
Blockly.Msg.lp2i_mp3_next = "read the following mp3 file";
Blockly.Msg.lp2i_mp3_next_tooltip = "plays the next song";
// servomotor
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1 = "rotate to";
Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE = "angle [0°-180°]";
Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP = "possible rotation between 0 and 180 degrees";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT = "spin";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP = "Spin the servo connected to the specified pin, at the indicated speed and in the selected direction";
//engine
Blockly.Msg.mot_tooltip = "Shield motor controller L293D: \n activates both motors (M1 and M2) to advance or turn, the speed can be set between 0 and 90";
Blockly.Msg.mot_stop = "stop";
Blockly.Msg.mot_stop_tooltip = "L293D Motor Controller Shield: \nstop the two motors (M1 and M2)";
Blockly.Msg.moteur = "activate the engine";
Blockly.Msg.moteurstop = "stop the engine";
Blockly.Msg.moteur_tooltip = "starts the DC motor connected to the specified pin, at the indicated speed \nspeed = 0 -> motor stop";
Blockly.Msg.moteurdagu_tooltiprs040 = "RS 040 board: \n activates one of the 2 outputs to drive DC motors, the speed can be set between 0 and 90";
Blockly.Msg.moteurdagu_tooltiprs040stop = "RS 040 board: \nstop one of the 2 motors";
Blockly.Msg.moteurdagu_tooltiprs027 = "RS 027 board: \n operates one of the 2 outputs to drive DC motors, the speed can be set between 0 and 90";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR1 = "v1 - DC Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR2 = "v2 - DC Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION = "direction";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_VITESSE = Blockly.Msg.vitesse+"[0-255]";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT = "forward";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE = "backward";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP = "stop";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP1 = "v1 - Stepper Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP2 = "v2 - stepper motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_CONNECT = "pin";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_PPT = "not per turn";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_RPM = "speed (RPM)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_NB_PAS = "number of steps";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC1 = "DC 1 engine";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC2 = "DC 2 engine";
Blockly.Msg.m_pap="step-by-step engine";
Blockly.Msg.m_pap_step="step";
Blockly.Msg.m_pap_step1="move forward";
Blockly.Msg.m_pap_tooltip = "Initialization of a stepping motor. \nIndicate number of steps, speed in rpm and pins to connect";
Blockly.Msg.m_pap_step_tooltip = "activates the stepping motor by the number of steps indicated, the following instruction will only be executed once the rotation of the motor is done";
// serial
Blockly.Msg.Serial_Init = "Монитор порта - Подключение ";
//Blockly.Msg.Serial_Init_tooltip = "Set the communication rate in characters per second for serial communication";
Blockly.Msg.Serial_Write = "Монитор порта - Печать по строке";
Blockly.Msg.Serial_Write_ln = "Монитор порта - Отправить значение";
//Blockly.Msg.Serial_write_tooltip = "Send data to the serial port";
Blockly.Msg.Serial_read = "Монитор порта - Чтение";
//Blockly.Msg.Serial_read_tooltip = "returns the first available data byte available in the serial port, or -1 if no data is available";
Blockly.Msg.Serial_available = "Монитор порта - Доступ?";
//Blockly.Msg.Serial_available_tooltip = "returns the number of bytes available in the serial port queue, or 0 if nothing is available";
Blockly.Msg.Serial_saut = "a line break";
//Blockly.Msg.Serial_saut_tooltip = "returns a line break on the serial monitor";
Blockly.Msg.Serial_space = "a separator";
//Blockly.Msg.Serial_space_tooltip = "return a space on the serial monitor";
Blockly.Msg.repl_read = "user entered command";
// software serial
Blockly.Msg.SSERIAL_Init = "SoftSerial - Подключение  Rx";
Blockly.Msg.SSERIAL_Init_ttl = "UART Дисплей - Подключение  Rx";
Blockly.Msg.base_define_ttl_uart = "UART Дисплей - Код кнопки";
Blockly.Msg.base_define_ttl_uart_top = "UART Дисплей - Чтение";
Blockly.Msg.base_define_ttl_uart_top_nom = "UART Дисплей - Отправить";
Blockly.Msg.base_define_ttl_uart_top_nom_var = "в переменную ";
Blockly.Msg.base_define_ttl_uart_top_nom_var_g = "в график ";
Blockly.Msg.soft_read_ttl_dis = "UART Дисплей - Код";
Blockly.Msg.SSERIAL_Init_bluetooth = "Bluetooth - Подключение  Rx";
//Blockly.Msg.SSERIAL_tooltip = "Creating a new communication port using the specified pins and speed";
Blockly.Msg.SSERIAL_Read = "SoftSerial - Чтение";
Blockly.Msg.SSERIAL_Read_bluetooth = "Bluetooth - Чтение";
//Blockly.Msg.SSERIAL_Read_tooltip = "returns the first byte of incoming data available in the software port, or -1 if no data is available";
Blockly.Msg.SSERIAL_Write = "SoftSerial - Отправить значение";
Blockly.Msg.SSERIAL_Write_bluetooth = "Bluetooth - Отправить значение";
//Blockly.Msg.SSERIAL_Write_tooltip = "Send data to the software port";
//Blockly.Msg.SSERIAL_Read_tooltip = "returns the first byte of incoming data available in the software port, or -1 if no data is available";
Blockly.Msg.SSERIAL_Available = "SoftSerial - Доступ?";
Blockly.Msg.SSERIAL_Available_bluetooth = "Bluetooth - Доступ?";
//Blockly.Msg.SSERIAL_Available_tooltip = "returns the number of available bytes in the software port queue, or 0 if nothing is available";
////////////////////////////  DIY Robot/////////////////////
Blockly.Msg.OTTO9_HOME_TEXT = "home";
//Blockly.Msg.OTTO9_HOME_TOOLTIP = "  goes to home position straight";
//Blockly.Msg.OTTO9_DIY_URL = " ";
Blockly.Msg.OTTO9_HUMANOID_URL = " ";
Blockly.Msg.OTTO9_CALIBRATION='calibrate ';
Blockly.Msg.OTTO9_CALIBRATION_LEG='leg ';
Blockly.Msg.OTTO9_CALIBRATION_FOOT='foot ';
Blockly.Msg.OTTO9_CALIBRATION_ARM='arm ';
Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP='use small positive and negative values iteratively,change gradually until is completely straight (90º)';
Blockly.Msg.OTTO9_EEPROM_TEXT= 'save Trims on EEPROM';
Blockly.Msg.OTTO9_EEPROM_TOOLTIP= 'Use only after completely straight(90º) one time, delete this BLOCK after for further programming';
Blockly.Msg.OTTO9_MOVE_TEXT = "move";
Blockly.Msg.OTTO9_MOVE_TOOLTIP = "  basic movements";
Blockly.Msg.OTTO9_MOVE_CHOICE = [["↑ forward", "FORWARD"], ["↓ backward", "BACKWARD"], ["↺ turn left", "LEFT"], ["↻ turn right", "RIGHT"], ["bend to the left", "BENDLEFT"], ["bend to the right", "BENDRIGHT"], ["shake left leg", "SHAKELEFT"], ["shake right leg", "SHAKERIGHT"], ["up", "jump"]];
Blockly.Msg.OTTO9_MOVEW_CHOICE = [["↑ forward", "FORWARD"], ["↓ backward", "BACKWARD"], ["↺ turn left", "LEFT"], ["↻ turn right", "RIGHT"]]; 
Blockly.Msg.OTTO9_MOVE_SPEED_TEXT = "speed";
Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE = [["normal", "1000"],["slow", "2000"],["very slow", "3000"] , ["fast", "750"], ["very fast", "500"], ["way to fast", "250"]];
Blockly.Msg.OTTO9_MOVEW_SPEED_CHOICE = [["normal", "45"],["slow", "20"],["very slow", "10"] , ["fast", "60"], ["very fast", "90"]];
Blockly.Msg.OTTO9_DANCE_TEXT = "dance";
Blockly.Msg.OTTO9_DANCE_TOOLTIP = "  dance!";
Blockly.Msg.OTTO9_DANCE_CHOICE = [["moonwalk ⟵", "moonwalkerLEFT"],  ["moonwalk ⟶", "moonwalkerRIGHT"],["crossing ⟵", "crusaitoLEFT"],["crossing ⟶", "crusaitoRIGHT"], ["flapping ↑", "flappingFRONT"], ["flapping ↓", "flappingBACK"]];
Blockly.Msg.OTTO9_DANCE_SIZE_TEXT = "size";
Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE = [["normal", "25"], ["little", "10"], ["big", "40"]];
Blockly.Msg.OTTO9_DO_TEXT = "do";
Blockly.Msg.OTTO9_DO_TOOLTIP = "  complex movements";
Blockly.Msg.OTTO9_DO_CHOICE = [ ["swing", "swing"], ["updown", "updown"], ["tiptoeSwing", "tiptoeSwing"], ["jitter", "jitter"], ["ascendingTurn", "ascendingTurn"]];
Blockly.Msg.OTTO9_GESTURE_TEXT = "gesture";
Blockly.Msg.OTTO9_GESTURE_TOOLTIP = "Emotional sounds combined with movements";
Blockly.Msg.OTTO9_GESTURE_CHOICE = [["😃 happy1", "OttoSuperHappy"],["🙂 happy2", "OttoHappy"], ["🙁 sad", "OttoSad"], ["😴 sleep", "OttoSleeping"], ["😕 confused", "OttoConfused"], ["😰 fretful", "OttoFretful"], ["😍 love", "OttoLove"], ["😡 angry", "OttoAngry"], ["🤩 magic", "OttoMagic"], ["😐 wave", "OttoWave"], [" 😎 victory", "OttoVictory"], ["😞 fail", "OttoFail"], ["💩 fart", "OttoFart"]];
Blockly.Msg.OTTO9_SOUND_TEXT = "sound";
Blockly.Msg.OTTO9_SOUND_TOOLTIP = "Emotional sounds";
Blockly.Msg.OTTO9_SOUND_CHOICE = [ ["😃 happy1", "S_superHappy"], ["🙂 happy2", "S_happy"], ["😊 happy3", "S_happy_short"], ["🙁 sad", "S_sad"], ["😕 confused", "S_confused"], ["🤗 cuddly", "S_cuddly"], ["😮 Oh", "S_OhOoh"], ["😯 OhOoh", "S_OhOoh2"], ["😲 surprise", "S_surprise"],["🤖 connect", "S_connection"], [" 🤖 disconnect", "S_disconnection"], ["👇 push", "S_buttonPushed"], ["❗ 1", "S_mode1"], ["❗❗ 2", "S_mode2"], ["❗❗❗ 3", "S_mode3"], ["💤 sleep", "S_sleeping"], ["💩 fart1", "S_fart1"], ["💩 fart2", "S_fart2"], ["💩 fart3", "S_fart3"],];
Blockly.Msg.OTTO9_GETDISTANCE_TEXT = "distance [cm]";
Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP = "Ranging distance between 2cm to 400cm";
Blockly.Msg.OTTO9_GETOBSTACLE_TEXT = "obstacle";
Blockly.Msg.OTTO9_OBSTACLE_CHOICE = [["close", "10"],["very close", "3"],["far", "30"]];
Blockly.Msg.OTTO9_GETNOISE_TEXT = "noise measured";
Blockly.Msg.OTTO9_GETNOISE_TOOLTIP = "100 is quiet, 500 noise and more than 1000 is loud, also adjust the sensor trimpot sensibility";
Blockly.Msg.OTTO9_GETTOUCH_TEXT = "touch";
Blockly.Msg.OTTO9_GETTOUCH_TOOLTIP = "use if conditional";
Blockly.Msg.OTTO9_GETG_TEXT = "motion";
Blockly.Msg.OTTO9_MOUTH_TEXT = "mouth";
Blockly.Msg.OTTO9_MOUTH_TOOLTIP = "mouth emotion for the 8x8 LED matrix #0-30";
Blockly.Msg.OTTO9_MOUTH_CHOICE = [["😃 happy1", "happyOpen"],["🙂 happy2", "happyClosed"], ["😊 smile", "smile"], ["😦 sad1", "23"], ["🙁 sad2", "24"], ["😮 surprise", "smallSurprise"], ["😲 Surprise2", "bigSurprise"], ["😕 confused", "confused"],["😛 tongue", "tongueOut"],["🙃 silly", "culito"],  ["😑 serious", "lineMouth"], ["🙄 upset", "21"], ["💖 heart", "heart"], ["🦇 v1", "vamp1"], ["🦇 v2", "vamp2"], ["❌ no", "xMouth"], ["✅ OK", "okMouth"],["❓?", "27"], ["⚡ thunder", "thunder"]];
Blockly.Msg.OTTO9_EYES_TEXT = "eyes";
Blockly.Msg.OTTO9_EYES_TOOLTIP = "eyes emotion for the 16x8 i2C LED matrix ";
Blockly.Msg.OTTO9_EYES_CHOICE = [["😃 happy1", "happy_bmp"],["🙂 happy2", "eyes_bmp"], ["😦 sad", "sad_bmp"], ["😡 angry1", "angry_bmp"], ["😡 angry2", "angry2_bmp"], ["😰 freetful", "freetful_bmp"], ["😕 confused", "confused_bmp"],["😴 sleep", "sleep_bmp"],["😍 love", "love_bmp"],  ["😑 wave", "wave_bmp"], ["🤩 magic", "magic_bmp"], ["😞 fail", "fail_bmp"], ["🤖 logo", "logo_bmp"], ["❌❌ no", "XX_bmp"], ["x x", "xx_bmp"],["▉", "full_bmp"]];
Blockly.Msg.OTTO9_EYESTEXT_TEXT = "eyes text";
Blockly.Msg.OTTO9_EYES_CLEAR_TEXT = " clear eyes";
Blockly.Msg.OTTO9_MATRIX_TOOLTIP = "limited to CAPITALS A to Z NUMBERS 0 to 9 : ; < >  = @, max.9 characters";
Blockly.Msg.OTTO9_MATRIXTEXT_TEXT = "mouth text";
Blockly.Msg.OTTO9_CLEAR_TEXT = " clear mouth";
Blockly.Msg.OTTO9_CLEAR_TOOLTIP = "Turn off all LEDs of the mouth matrix 8x8";
Blockly.Msg.OTTO9_ARMS_TEXT = "arms";
Blockly.Msg.OTTO9_ARMS_TOOLTIP = "move the arms!";
Blockly.Msg.OTTO9_ARMS_CHOICE = [["hands up", "HANDSUP"], ["handwave left", "HANDWAVE1"], ["handwave right", "HANDWAVE2"]];


Blockly.Msg.HELPURL_001 = "site-help/001-ru.html"; 
Blockly.Msg.HELPURL_002 = "site-help/002-ru.html";
Blockly.Msg.HELPURL_003 = "site-help/003-ru.html";
Blockly.Msg.HELPURL_004 = "site-help/004-ru.html";
Blockly.Msg.HELPURL_005 = "site-help/005-ru.html";
Blockly.Msg.HELPURL_006 = "site-help/006-ru.html";
Blockly.Msg.HELPURL_007 = "site-help/007-ru.html";
Blockly.Msg.HELPURL_008 = "site-help/008-ru.html";
Blockly.Msg.HELPURL_009 = "site-help/009-ru.html";
Blockly.Msg.HELPURL_010 = "site-help/010-ru.html";
Blockly.Msg.HELPURL_011 = "site-help/011-ru.html";
Blockly.Msg.HELPURL_012 = "site-help/012-ru.html";
Blockly.Msg.HELPURL_013 = "site-help/013-ru.html";
Blockly.Msg.HELPURL_014 = "site-help/014-ru.html";
Blockly.Msg.HELPURL_015 = "site-help/015-ru.html";
Blockly.Msg.HELPURL_016 = "site-help/016-ru.html";
Blockly.Msg.HELPURL_017 = "site-help/017-ru.html";
Blockly.Msg.HELPURL_018 = "site-help/018-ru.html";
Blockly.Msg.HELPURL_019 = "site-help/019-ru.html";
Blockly.Msg.HELPURL_020 = "site-help/020-ru.html";
Blockly.Msg.HELPURL_021 = "site-help/021-ru.html";
Blockly.Msg.HELPURL_022 = "site-help/022-ru.html";
Blockly.Msg.HELPURL_023 = "site-help/023-ru.html";
Blockly.Msg.HELPURL_024 = "site-help/024-ru.html";
Blockly.Msg.HELPURL_025 = "site-help/025-ru.html";
Blockly.Msg.HELPURL_026 = "site-help/026-ru.html";
Blockly.Msg.HELPURL_027 = "site-help/027-ru.html";
Blockly.Msg.HELPURL_028 = "site-help/028-ru.html";
Blockly.Msg.HELPURL_029 = "site-help/029-ru.html";
Blockly.Msg.HELPURL_030 = "site-help/030-ru.html";
Blockly.Msg.HELPURL_031 = "site-help/031-ru.html";
Blockly.Msg.HELPURL_032 = "site-help/032-ru.html";
Blockly.Msg.HELPURL_033 = "site-help/033-ru.html";
Blockly.Msg.HELPURL_034 = "site-help/034-ru.html";
Blockly.Msg.HELPURL_035 = "site-help/035-ru.html";
Blockly.Msg.HELPURL_036 = "site-help/036-ru.html";
Blockly.Msg.HELPURL_037 = "site-help/037-ru.html";
Blockly.Msg.HELPURL_038 = "site-help/038-ru.html";
Blockly.Msg.HELPURL_039 = "site-help/039-ru.html";
Blockly.Msg.HELPURL_040 = "site-help/040-ru.html";
Blockly.Msg.HELPURL_041 = "site-help/041-ru.html";
Blockly.Msg.HELPURL_042 = "site-help/042-ru.html";
Blockly.Msg.HELPURL_043 = "site-help/043-ru.html";
Blockly.Msg.HELPURL_044 = "site-help/044-ru.html";
Blockly.Msg.HELPURL_045 = "site-help/045-ru.html";
Blockly.Msg.HELPURL_046 = "site-help/046-ru.html";
Blockly.Msg.HELPURL_047 = "site-help/047-ru.html";
Blockly.Msg.HELPURL_048 = "site-help/048-ru.html";
Blockly.Msg.HELPURL_049 = "site-help/049-ru.html";
Blockly.Msg.HELPURL_050 = "site-help/050-ru.html";
Blockly.Msg.HELPURL_051 = "site-help/051-ru.html";
Blockly.Msg.HELPURL_052 = "site-help/052-ru.html";
Blockly.Msg.HELPURL_053 = "site-help/053-ru.html";
Blockly.Msg.HELPURL_054 = "site-help/054-ru.html"; 
Blockly.Msg.HELPURL_055 = "site-help/055-ru.html";
Blockly.Msg.HELPURL_056 = "site-help/056-ru.html";
Blockly.Msg.HELPURL_057 = "site-help/057-ru.html";
Blockly.Msg.HELPURL_058 = "site-help/058-ru.html";
Blockly.Msg.HELPURL_059 = "site-help/059-ru.html";
Blockly.Msg.HELPURL_060 = "site-help/060-ru.html";
Blockly.Msg.HELPURL_061 = "site-help/061-ru.html";
Blockly.Msg.HELPURL_062 = "site-help/062-ru.html";
Blockly.Msg.HELPURL_063 = "site-help/063-ru.html";
Blockly.Msg.HELPURL_064 = "site-help/064-ru.html";
Blockly.Msg.HELPURL_065 = "site-help/065-ru.html";
Blockly.Msg.HELPURL_066 = "site-help/066-ru.html";
Blockly.Msg.HELPURL_067 = "site-help/067-ru.html";
Blockly.Msg.HELPURL_068 = "site-help/068-ru.html";
Blockly.Msg.HELPURL_069 = "site-help/069-ru.html";
Blockly.Msg.HELPURL_070 = "site-help/070-ru.html";
Blockly.Msg.HELPURL_071 = "site-help/071-ru.html";
Blockly.Msg.HELPURL_072 = "site-help/072-ru.html";
Blockly.Msg.HELPURL_073 = "site-help/073-ru.html";
Blockly.Msg.HELPURL_074 = "site-help/074-ru.html";
Blockly.Msg.HELPURL_075 = "site-help/075-ru.html";
Blockly.Msg.HELPURL_076 = "site-help/076-ru.html";
Blockly.Msg.HELPURL_077 = "site-help/077-ru.html";
Blockly.Msg.HELPURL_078 = "site-help/078-ru.html";
Blockly.Msg.HELPURL_079 = "site-help/079-ru.html";
Blockly.Msg.HELPURL_080 = "site-help/080-ru.html";
Blockly.Msg.HELPURL_081 = "site-help/081-ru.html";
Blockly.Msg.HELPURL_082 = "site-help/082-ru.html";
Blockly.Msg.HELPURL_083 = "site-help/083-ru.html";
Blockly.Msg.HELPURL_084 = "site-help/084-ru.html";
Blockly.Msg.HELPURL_085 = "site-help/085-ru.html";
Blockly.Msg.HELPURL_086 = "site-help/086-ru.html";
Blockly.Msg.HELPURL_087 = "site-help/087-ru.html"; //функция
Blockly.Msg.HELPURL_088 = "site-help/088-ru.html"; //леонардо
Blockly.Msg.HELPURL_089 = "site-help/089-ru.html"; //прерывание
Blockly.Msg.HELPURL_090 = "site-help/090-ru.html"; //массивы
Blockly.Msg.HELPURL_091 = "site-help/091-ru.html";
Blockly.Msg.HELPURL_092 = "site-help/092-ru.html"; //esp
Blockly.Msg.HELPURL_093 = "site-help/093-ru.html"; //просто сервомотор
Blockly.Msg.HELPURL_094 = "site-help/094-ru.html"; //шаговый мотор степ и дир
Blockly.Msg.HELPURL_095 = "site-help/095-ru.html"; //гироскоп
Blockly.Msg.HELPURL_096 = "site-help/096-ru.html"; // дисплей 128х64 
Blockly.Msg.HELPURL_097 = "site-help/097-ru.html"; // 
Blockly.Msg.HELPURL_098 = "site-help/098-ru.html"; // 
Blockly.Msg.HELPURL_099 = "site-help/099-ru.html"; // 
Blockly.Msg.HELPURL_100 = "site-help/100-ru.html"; // 
Blockly.Msg.HELPURL_101 = "site-help/101-ru.html"; // Дисплей двин
Blockly.Msg.HELPURL_102 = "site-help/102-ru.html"; // Дисплей tv
Blockly.Msg.HELPURL_103 = "site-help/103-ru.html"; // Дисплей vga
Blockly.Msg.HELPURL_104 = "site-help/104-ru.html"; //  

Blockly.Msg.FOR_004_1 = "Повторять";
Blockly.Msg.FOR_004_2 = "раз";

Blockly.Msg.MATH_SINGLE_OP_ROOT = "Корень";
Blockly.Msg.MATH_SINGLE_OP_ROOT_N = "Минус";
Blockly.Msg.MATH_SINGLE_OP_ROOT_SIN = "Синус";
Blockly.Msg.MATH_SINGLE_OP_ROOT_COS = "Косинус";
Blockly.Msg.MATH_SINGLE_OP_ROOT_TAN = "Тангенс";

Blockly.Msg.GENERAL_IR = "IR Remote - Чтение - Pin";
Blockly.Msg.GENERAL_IR1 = "IR Remote - HEX";
Blockly.Msg.GENERAL_IRMM = "IR Led - Pin 3 - Отправить код";
Blockly.Msg.GENERAL_IRMM1 = "IR Led - HEX";

Blockly.Msg.RF24L01_sendvar = "Отправить значение";
Blockly.Msg.RF24L01_recvvar = "Записать в переменную";

Blockly.Msg.RF24L01_init = "NRF24L01 2.4Ghz - Подключение -";
Blockly.Msg.RF24L01_init2 = "SCK - Pin 13 MOSI - Pin 11 MISO - Pin 12";
Blockly.Msg.RF24L01_PIN_CE = "CE - Pin";
Blockly.Msg.RF24L01_PIN_CS = "CS - Pin";
Blockly.Msg.RF24L01_init3 = "NRF24L01 2.4Ghz - Отправить значение";
Blockly.Msg.RF24L01_init4 = "NRF24L01 2.4Ghz - Записать в переменную";

Blockly.Msg.RTCDS1302_RST = "DS1302 - Подключение  RST - Pin";
Blockly.Msg.RTCDS1302_CLK = "CLK - Pin";
Blockly.Msg.RTCDS1302_DAT = "DAT - Pin";
Blockly.Msg.RTCDS1302_RTC = "DS1302 - Запись - День";
Blockly.Msg.RTCDS1302_MONTH="Месяц"; 
Blockly.Msg.RTCDS1302_YEAR="Год"; 
Blockly.Msg.RTCDS1302_HOUR="Час"; 
Blockly.Msg.RTCDS1302_MINUTE="Минуты"; 
Blockly.Msg.RTCDS1302_SECOND="Секунды"; 
Blockly.Msg.RTCDS1302_Name2="DS1302 - Чтение ";
Blockly.Msg.RTCDS1302_DAY="День"; 
 
Blockly.Msg.RTCDS3231_NAME = "DS3231 - Подключение - SDA - Pin A4 SCL - Pin A5";
Blockly.Msg.RTCDS3231_RTC = "DS3231 - Запись - День";
Blockly.Msg.RTCDS3231_MONTH="Месяц"; 
Blockly.Msg.RTCDS3231_YEAR="Год"; 
Blockly.Msg.RTCDS3231_HOUR="Час"; 
Blockly.Msg.RTCDS3231_MINUTE="Минуты"; 
Blockly.Msg.RTCDS3231_SECOND="Секунды"; 
Blockly.Msg.RTCDS3231_DAY="День"; 
Blockly.Msg.RTCDS3231_NAME2="DS3231 - Чтение";
Blockly.Msg.RTCDS3231_NAME3="DS3231 - Значение";

Blockly.Msg.GENERAL_RESET = "Аппаратный сброс платы";

Blockly.Msg.STORAGE_EEPROM_WRITE_BYTE = "EEPROM - Адрес"; 
Blockly.Msg.STORAGE_DATA_BYTE = "Записать значение"; 
Blockly.Msg.STORAGE_DATA_VARIABLE = "Переменную:"; 
Blockly.Msg.STORAGE_EEPROM_READ_VARIABLE = "EEPROM - Чтение с адреса"; 

Blockly.Msg.SD_init = "Micro SD - Подключение -";
Blockly.Msg.SD_init2 = "SCK - Pin 13 MOSI - Pin 11 MISO - Pin 12 CS - Pin";
Blockly.Msg.SD_name = "Micro SD - Запись текст";
Blockly.Msg.SD_name1 = "Micro SD - Чтение файла";
Blockly.Msg.SD_name2 = "Micro SD - Удалить файл";
Blockly.Msg.SD_name3 = "Micro SD - Новая папка";
Blockly.Msg.SD_name4 = "Micro SD - Удалить папку";
Blockly.Msg.SD_infile= "в файл";
Blockly.Msg.SD_linefeed= "Перенос на новою строку";

Blockly.Msg.stepPIN = "Сервопривод - Pin";
Blockly.Msg.stepROTSERVO_Direction = "Скорость";
Blockly.Msg.stepROTSERVO_Speed = "Угол";
Blockly.Msg.stepROTSERVO_Servo = "Сервопривод - Отключить - Pin";

Blockly.Msg.i2s = "I2C - Сканер";

Blockly.Msg.SERVO_Servo = "PCA 9685 Адрес"; 
Blockly.Msg.PIN = "Pin"; 
Blockly.Msg.Degree = "Угол";

Blockly.Msg.l9110MOTOR_D = "L298P";
Blockly.Msg.l9110MOTOR = "RM HN";
Blockly.Msg.l9110MOTORn = "EN (pwm)";
Blockly.Msg.l9110MOTOR_Direction ="Направление";
Blockly.Msg.l9110MOTOR_speed = "Скорость";
Blockly.Msg.l9110MOTOR_L = "L293D";
Blockly.Msg.l9110MOTOR_Lm = "N1 (pwm)";
Blockly.Msg.l9110MOTORn_L = "N2 (pwm)";

Blockly.Msg.STEEPER_name = "Шаговый мотор";
Blockly.Msg.STEEPER_steprev = "Шагов за оборот";
Blockly.Msg.STEEPER_pin1 = "Pin A";
Blockly.Msg.STEEPER_pin2 = "Pin B";
Blockly.Msg.STEEPER_pin3 = "Pin C";
Blockly.Msg.STEEPER_pin4 = "Pin D";
Blockly.Msg.STEEPER_name_d1 = "Шаговый мотор";
Blockly.Msg.STEEPER_name_d2 = "Скорость";
Blockly.Msg.STEEPER_name_d3 = "Шагов";
Blockly.Msg.STEEPER_stop = "Шаговый мотор - Отключить удержание";

Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT_N = "Цифровой модуль";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT_P = "Pin";
Blockly.Msg.AR_IN_DIG1 = "Кнопка";
Blockly.Msg.AR_IN_DIG2 = "Инфракрасный";
Blockly.Msg.AR_IN_DIG3 = "Удара";
Blockly.Msg.AR_IN_DIG4 = "Вибрации";
Blockly.Msg.AR_IN_DIG5 = "Тахо";
Blockly.Msg.AR_IN_DIG6 = "Наклона";
Blockly.Msg.AR_IN_DIG7 = "Холла";
Blockly.Msg.AR_IN_DIG8 = "Движения";
Blockly.Msg.AR_IN_DIG9 = "Пламяни";
Blockly.Msg.AR_IN_DIG10 = "Газа";
Blockly.Msg.AR_IN_DIG11 = "Алкоголя";
Blockly.Msg.AR_IN_DIG12 = "Воды";
Blockly.Msg.AR_IN_DIG13 = "Пара";
Blockly.Msg.AR_IN_DIG14 = "Почвы";

Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT_A = "Аналоговый модуль";
Blockly.Msg.AR_IN_DIGA1 = "Потенциометр";
Blockly.Msg.AR_IN_DIGA2 = "Инфракрасный";
Blockly.Msg.AR_IN_DIGA3 = "Фоторезистор";
Blockly.Msg.AR_IN_DIGA4 = "Микрофон";
Blockly.Msg.AR_IN_DIGA5 = "Джойстик X";
Blockly.Msg.AR_IN_DIGA6 = "Джойстик Y";
Blockly.Msg.AR_IN_DIGA7 = "Холла";
Blockly.Msg.AR_IN_DIGA8 = "Термометр";
Blockly.Msg.AR_IN_DIGA9 = "Пламяни";
Blockly.Msg.AR_IN_DIGA10 = "Газа";
Blockly.Msg.AR_IN_DIGA11 = "Алкоголя";
Blockly.Msg.AR_IN_DIGA12 = "Воды";
Blockly.Msg.AR_IN_DIGA13 = "Пара";
Blockly.Msg.AR_IN_DIGA14 = "Почвы";

Blockly.Msg.ultrasonic_ranger="Дальномер HC SR04";
Blockly.Msg.TRIG="Trig - Pin";
Blockly.Msg.Echo="Echo - Pin";

Blockly.Msg.DHT_NAME="DHT";
Blockly.Msg.DHT_Type="Тип";
Blockly.Msg.DHT_Type11="DHT11";
Blockly.Msg.DHT_Type21="DHT21";
Blockly.Msg.DHT_Type22="DHT22";
Blockly.Msg.DHT_Temp="Температура ºC";
Blockly.Msg.DHT_Humi="Влажность %";

Blockly.Msg.RE_Interrupt="Энкодер DT - Pin";
Blockly.Msg.RE_Interruptg="CLK - Pin";

Blockly.Msg.bmpHMC5883 = "Барометр BMP 280  Адрес";
Blockly.Msg.bmpHMC5883_2 = " Давление";
Blockly.Msg.bmpHMC5883_3 = "мм. рт. ст";

Blockly.Msg.TempDS18B20 = "Термометр DS18B20 Pin";
Blockly.Msg.TempDS18B20N = "Температура";
Blockly.Msg.TempDS18B20B = "ºC";

Blockly.Msg.ADXL345 = "Акселерометр ADXL345  Адрес";
Blockly.Msg.ADXL345D = "Ось";
Blockly.Msg.ADXL345S = "Значение";

Blockly.Msg.HMC5883 = "Компас HMC5883  Адрес";
Blockly.Msg.HMC5883D = "Ось";
Blockly.Msg.HMC5883S = "Значение";

Blockly.Msg.MPU6050 = "Гироскоп MPU6050  Адрес";

Blockly.Msg.digital_writeD = "Цифровой модуль";
Blockly.Msg.digD1 = "Светодиод";
Blockly.Msg.digD2 = "Реле";
Blockly.Msg.digD3 = "Опто реле";
Blockly.Msg.digD4 = "Лазер";
Blockly.Msg.digD5 = "Транзистор";
Blockly.ALIGN_RIGHT_D = "Pin";

Blockly.Msg.digD7 = "Включить";
Blockly.Msg.digD8 = "Отключить";
Blockly.Msg.ALIGN_RIGHT = "Сигнал";

Blockly.Msg.digital_writeV = "Аналоговый модуль";
Blockly.Msg.digital_writeG = "Pin";

Blockly.Msg.digAS1 = "Светодиод";
Blockly.Msg.digAS2 = "Транзистор";
Blockly.Msg.digAS3 = "Мотор";
Blockly.Msg.digAS4 = "Лампа";
Blockly.Msg.digAS5 = "Накал";

Blockly.Msg.LedRGBpinR = "R - Pin";
Blockly.Msg.LedRGBpinG = "G - Pin";
Blockly.Msg.LedRGBpinB = "B - Pin";
Blockly.Msg.LedRGBcolor = "Цвет";
Blockly.Msg.LedRGBName = "RGB Общий";

Blockly.Msg.LedPin = "Светодиод Pin";
Blockly.Msg.Cathode = "Катод";
Blockly.Msg.Anode = "Анод";

Blockly.Msg.ledstrip_WS2812B_nameR = "Адресная лента WS2812";
Blockly.Msg.ledstrip_WS2812B_nameD = "Pin";
Blockly.Msg.ledstrip_WS2812B_nameN = "Яркость";
Blockly.Msg.ledstrip_WS2812B_setPixelColor = "Цвет";
Blockly.Msg.ledstrip_WS2812B_Led_Number = "Номер пикселя";

Blockly.Msg.ds1990_Write = "Ключ DS1990 - Запись Pin";
Blockly.Msg.ds1990_Number = "ID";
Blockly.Msg.ds1990_Read1 = "Ключ DS1990 - Чтение Pin";

Blockly.Msg.RFID_init = "RFID MFRC522";
Blockly.Msg.RFID_PIN_RST = "RST - Pin";
Blockly.Msg.RFID_init2 = "SCK - Pin 13 MISO - Pin 12 MOSI - Pin 11 SDA - Pin";
Blockly.Msg.RFID_init3 = "Код";

Blockly.Msg.KEYPAD_NAME = "Клавиатура   4х4 Pin";
Blockly.Msg.KEYPAD_NAME_R = "Код";

Blockly.Msg.fingerprinting_read = "Дактилоскопия FPM10A ";
Blockly.Msg.fingerprinting_read_pin = "Tx - Pin 2 Rx - Pin 3";
Blockly.Msg.fingerprinting_read_pinR = "Запись - ID ";
Blockly.Msg.fingerprinting_readD = "Чтение - ID ";

Blockly.Msg.tensorsensor_read = "Тензодатчик CZL-611CD-01";
Blockly.Msg.tensorsensor_read_pin = "SCK - Pin 2 DT - Pin 3";
Blockly.Msg.tensorsensor_read_D = "Значение";

Blockly.Msg.TonePin = "Зуммер - Pin";
Blockly.Msg.Frequence = "Частота";
Blockly.Msg.Duration = "Время";
Blockly.Msg.Note = "Нота";
Blockly.Msg.Octave = "Октава";

Blockly.Msg.TEA5767_init = "Радио TEA5767 - SDA - Pin A4 SCL - Pin A5";
Blockly.Msg.TEA5767_SetFrequency = "Частота(Mhz)";
Blockly.Msg.TEA5767_init1 = "Радио TEA5767 - Уровень сигнала";
Blockly.Msg.TEA5767_init2 = "Радио TEA5767 - Отключить звук";
Blockly.Msg.TEA5767_init3 = "Радио TEA5767 - Включить звук";

Blockly.Msg.MP3_name = "DFP Player Mp3 - Tx/Rx Трек";
Blockly.Msg.MP3_name2 = "DFP Player Mp3 - Трек";
Blockly.Msg.MP3_name3 = "DFP Player Mp3 - Громкость";
Blockly.Msg.MP3_name4 = "DFP Player Mp3 - Клик ";
Blockly.Msg.MP3_vell = "Громкость";
Blockly.Msg.MP3_delay = "Время";

Blockly.Msg.m7_setup = "4/7 Индикатор - Подключение";
Blockly.Msg.m7print_setup = "4/7 Индикатор - Печать";

Blockly.Msg.TM1637_init = "TM 1637 - Подключение CLK - Pin";
Blockly.Msg.TM1637_init2 = "DIO - Pin";
Blockly.Msg.TM1637_name = "TM 1637 - Сегмент (1-4)";
Blockly.Msg.TM1637_NNN = "Число (0-9)";
Blockly.Msg.M1637_dpOFF_ON = "Двоеточие";
Blockly.Msg.TM1637_nameN = "TM 1637 - Число (0-9999)"; 

Blockly.Msg.MAX7219_LM_NAME = "8 / 7 MAX7219 - Подключение DIN - Pin";
Blockly.Msg.MAX7219_LM_PIN_CLK = "CLK - Pin";
Blockly.Msg.MAX7219_LM_PIN_CS = "CS - Pin";
Blockly.Msg.MAX7219_7D_DP = "Точка";
Blockly.Msg.MAX7219_7D_NAME2 = "8 / 7 MAX7219 - Число (0-9)";
Blockly.Msg.MAX7219_7D_NAME3 = "Сегмент (1-8)";
Blockly.Msg.MAX7219_7D_NAME4 = "8 / 7 MAX7219 - Число";
Blockly.Msg.MAX7219_7D_NAME5 = "Сегмент";
Blockly.Msg.MAX7219_7D_NAME6 = "8 / 7 MAX7219 - Очистить";

Blockly.Msg.MAX7219_LM_NAMEB = "8 x 8 MAX7219 - Подключение DIN - Pin";
Blockly.Msg.MAX7219_LM_PIN_CLKB = "CLK - Pin";
Blockly.Msg.MAX7219_LM_PIN_CSB = "CS - Pin";
Blockly.Msg.MAX7219_LM_PAINT = "8 x 8 MAX7219 - Графика";
Blockly.Msg.MAX7219_LM_PAINT_x = "8 x 8 MAX7219  X -";
Blockly.Msg.MAX7219_LM_PAINT_y = "Y -";
Blockly.Msg.MAX7219_LM_PAINT_px = "PX -";


Blockly.Msg.LCD_setup_name = "LCD 16x2 - Подключение";
Blockly.Msg.LCD_setup_RS = "RS";
Blockly.Msg.LCD_setup_E = "E";
Blockly.Msg.LCD_setup_DB4 = "DB4";
Blockly.Msg.LCD_setup_DB5 = "DB5";
Blockly.Msg.LCD_setup_DB6 = "DB6";
Blockly.Msg.LCD_setup_DB7 = "DB7";
Blockly.Msg.LCD_setup_COLUMNS = "Блоки";
Blockly.Msg.LCD_setup_ROWS = "Строки";
Blockly.Msg.LCD_setup_name_print = "LCD 16x2 - Печать";
Blockly.Msg.mLCDP_Print = "Текст";
Blockly.Msg.LCD_lcdi2c_print_grp = "LCD 16x2 - Графика";

Blockly.Msg.LCD_I2C_setup = "LCD 16x2 I2C - Подключение";
Blockly.Msg.LCD_I2C_setup2 = "SDA - Pin A4 SCL - Pin A5 Адрес";
Blockly.Msg.LCD_lcdi2c_print = "LCD 16x2 I2C - Печать";
Blockly.Msg.LCD_lcdi2c_print_gr = "LCD 16x2 I2C - Графика";
Blockly.Msg.LCD_lcdi2c_print_gr2 = "LCD - Графика";

Blockly.Msg.miniLCD_I2C_setup = "Mini OLED 128x64 I2C - Подключение";
Blockly.Msg.miniLCD_I2C_setup2 = "SDA - Pin A4 SCL - Pin A5";
Blockly.Msg.miniLCD_I2C_print_x = "Mini OLED 128x64 I2C - Печать X";
Blockly.Msg.miniLCD_I2C_print_y = "Y";
Blockly.Msg.miniLCD_I2C_print_F = "Размер";
Blockly.Msg.miniLCD_I2C_print_T = "Текст";
Blockly.Msg.miniLCD_I2C_print_R = "Число";
Blockly.Msg.miniLCD_I2C_print_TI = "Тип";
Blockly.Msg.miniLCD_I2C_print_draw = "Mini OLED 128x64 I2C - Графика";

Blockly.Msg.Motor_Forward = "Вперед";
Blockly.Msg.Motor_Backward = "Назад";


Blockly.Msg.LCD_TEST = "Дисплей";

Blockly.Msg.LCD_Nokia = "LCD Nokia - Подключение  SCK";
Blockly.Msg.LCD_Nokia_text = "LCD Nokia - Печать X";
Blockly.Msg.LCD_Nokia_text_x = "Текст";
Blockly.Msg.LCD_Nokia_nom_x = "Размер";
Blockly.Msg.LCD_Nokia_nom_y = "Число";

Blockly.Msg.LCD_Nokia_SmallFont = "Мини";
Blockly.Msg.LCD_Nokia_MediumNumbers = "Средний";
Blockly.Msg.LCD_Nokia_BigNumbers = "Большой";

Blockly.Msg.lcd_128x64px_spi = "LCD 128x64 SPI - Подключение";
Blockly.Msg.lcd_128x64px_spi_pos = "Положение";
Blockly.Msg.lcd_128x64px_spi_b = "LCD - Страница";
Blockly.Msg.lcd_128x64px_spi_m = "LCD - Печать X";
Blockly.Msg.lcd_128x64px_spi_pix = "LCD - Пиксель X";
Blockly.Msg.lcd_128x64px_spi_line = "LCD - Линия X";
Blockly.Msg.lcd_128x64px_spi_box = "LCD - Фигура X";

Blockly.Msg.lcd_128x64px_spi_mini = "LCD Mini OLED SPI - Подключение";
Blockly.Msg.lcd_128x64px_spi_top = "LCD - Подключение";
Blockly.Msg.lcd_128x64px_spi_draw_pl = "LCD - Графика";

Blockly.Msg.CAT_DISPLAYU_TFT = "Дисплей TFT";
Blockly.Msg.CAT_DISPLAYU_OLED = "Дисплей OLED";
Blockly.Msg.CAT_DISPLAYU_LCDP = "Дисплей LCD p";
Blockly.Msg.CAT_DISPLAYU_TTL = "Дисплей UART";

Blockly.Msg.lcd_128x128px_spi = "TFT ST7735 - Подключение";
Blockly.Msg.lcd_128x128px_spi_color = "Плата";
Blockly.Msg.lcd_128x128px_spi_color_fone = "Фон";
Blockly.Msg.lcd_128x128px_spi_text = "TFT ST7735 - Печать X";
Blockly.Msg.lcd_128x128px_spi_textcolor = "Цвет";
Blockly.Msg.lcd_128x128px_spi_textsize = "Размер";
Blockly.Msg.lcd_128x128px_spi_px = "TFT ST7735 - Пиксель X";
Blockly.Msg.lcd_128x128px_spi_line = "TFT ST7735 - Линия X";
Blockly.Msg.lcd_128x128px_spi_box = "TFT ST7735 - Фигура X";

Blockly.Msg.lcd_tah_spi = "TFT Touch 240x320 - Подключение дисплея";
Blockly.Msg.lcd_tah_spi_text = "TFT Touch 240x320 - Печать X";
Blockly.Msg.lcd_tah_spi_int = "Переменная";
Blockly.Msg.lcd_tah_spi_box = "TFT Touch 240x320 - Фигура X";
Blockly.Msg.lcd_tah_spi_tah = "TFT Touch";

Blockly.Msg.leonardo_url_1="Перемещение курсора на";
Blockly.Msg.leonardo_url_2="X";
Blockly.Msg.leonardo_url_3="Y";
Blockly.Msg.leonardo_url_4="Клик мыши";
Blockly.Msg.leonardo_url_5="Нажать кнопку мыши";
Blockly.Msg.leonardo_url_6="Отпустить кнопку мыши";
Blockly.Msg.leonardo_url_7="Клик клавиши";
Blockly.Msg.leonardo_url_8="Нажать кнопку";
Blockly.Msg.leonardo_url_9="Отпустить кнопку";
Blockly.Msg.leonardo_url_10="Отпустить все кнопки!";
Blockly.Msg.leonardo_url_11="Клик клавиши-модификатора";
Blockly.Msg.leonardo_url_12="Нажать клавишу-модификатора";
Blockly.Msg.leonardo_url_13="Отпустить клавишу-модификатора";

Blockly.Msg.interrupAttach="Прерывание Pin";
Blockly.Msg.ATTACHE = "Прерывание";
Blockly.Msg.ATTACHE1 = "Прервать";
Blockly.Msg.ATTACHE2 = "Прерывать";
Blockly.Msg.ATTACHE3 = "Не прерывать";

Blockly.Msg.interrupMode="Режим";
Blockly.Msg.RE_Interrupt_none = "Энкодер - Обновить значение";

Blockly.Msg.interrupAttachyield = "Фоновый";

Blockly.Msg.t_ru_e = "Истина";
Blockly.Msg.f_al_se = "Ложно";
Blockly.Msg.N_ULL = "Нулевой";

Blockly.Msg.HI_GH = "Высокий";
Blockly.Msg.LO_W = "Низкий";

Blockly.Msg.O_N = "ВКЛ";
Blockly.Msg.O_FF = "ОТКЛ";

Blockly.Msg.FOR_in_1 = "Счётчик";
Blockly.Msg.FOR_in_2 = "от";
Blockly.Msg.FOR_in_3 = "до";
Blockly.Msg.FOR_in_4 = "+";
Blockly.Msg.FOR_in_5 = "-";

Blockly.Msg.base_form_none_1 = "Выход из цикла";
Blockly.Msg.base_form_none_2 = "Повторить цикл";
Blockly.Msg.base_form_none_3 = "Повторять бесконечно";

Blockly.Msg.base_define_while = "Повторять пока";

Blockly.Msg.math_single_int = "Преобразовать";
Blockly.Msg.math_single_int2 = "в ";

Blockly.Msg.math_single_int_pi = "Является ли";
Blockly.Msg.math_single_int_pi2 = " ";
Blockly.Msg.math_single_int_pi3 = "Чётным";
Blockly.Msg.math_single_int_pi4 = "Нечётным";
Blockly.Msg.math_single_int_pi5 = "Целым";
Blockly.Msg.math_single_int_pi6 = "Положительным";
Blockly.Msg.math_single_int_pi7 = "Отрицательным";

Blockly.Msg.math_single_int_pi8 = "Делится ли";
Blockly.Msg.math_single_int_pi9 = "на";

Blockly.Msg.math_single_int_pi10 = "Остаток от";
Blockly.Msg.math_single_int_pi11 = " ÷ ";

Blockly.Msg.math_single_int_pi12 = "Предел";
Blockly.Msg.math_single_int_pi13 = "от";
Blockly.Msg.math_single_int_pi14 = "до";

Blockly.Msg.lcd_128x128px_spi_tv = "TV - Формат";
Blockly.Msg.lcd_128x128px_spi_tv1 = "TV - Печать";
Blockly.Msg.lcd_128x128px_spi_tv1x = "X";
Blockly.Msg.lcd_128x128px_spi_tv1y = "Y";
Blockly.Msg.lcd_128x128px_spi_tv1f = "Шрифт";
Blockly.Msg.lcd_128x128px_spi_tv1c = "Цвет";
Blockly.Msg.lcd_128x128px_spi_tv2 = "TV - Задержка";
Blockly.Msg.lcd_128x128px_spi_tv3 = "TV - Линия";
Blockly.Msg.lcd_128x128px_spi_tv4 = "TV - Прямоугольник";
Blockly.Msg.lcd_128x128px_spi_tv5 = "Заливка";
Blockly.Msg.lcd_128x128px_spi_tv6 = "TV - Очистить экран";
Blockly.Msg.lcd_128x128px_spi_tv7 = "Ширина";
Blockly.Msg.lcd_128x128px_spi_tv8 = "Высота";

Blockly.Msg.lcd_128x128px_spi_tv_vga = "VGA - Подключение";
Blockly.Msg.lcd_128x128px_spi_tv_vga1 = "VGA - Печать";
Blockly.Msg.lcd_128x128px_spi_tv_vga2 = "VGA - Очистить экран";
Blockly.Msg.lcd_128x128px_spi_tv_vga3 = "VGA - Задержка";

Blockly.Msg.ledstrip_WS2812B_delay = "Задержка";
Blockly.Msg.ledstrip_WS2812B_pro = "Программа";

Blockly.Msg.ledstrip_WS2812B_pro1 = "Наполнение с начала";
Blockly.Msg.ledstrip_WS2812B_pro2 = "Наполнение с конца";
Blockly.Msg.ledstrip_WS2812B_pro3 = "Перемещение с начала";
Blockly.Msg.ledstrip_WS2812B_pro4 = "Перемещение с конца";
Blockly.Msg.ledstrip_WS2812B_pro5 = "RGB перемещение";
Blockly.Msg.ledstrip_WS2812B_pro6 = "RGB радуга";
 
Blockly.Msg.ledstrip_WS1 = "D - Включить ленту";
Blockly.Msg.ledstrip_WS2 = "D - Отключить ленту";
Blockly.Msg.ledstrip_WS3 = "D - Перемещение пикселя в конец";
Blockly.Msg.ledstrip_WS4 = "D - Перемещение пикселя в начало";
Blockly.Msg.ledstrip_WS5 = "D - Набор пикселей в начало";
Blockly.Msg.ledstrip_WS6 = "D - Набор пикселей в конец";
Blockly.Msg.ledstrip_WS7 = "D - Наполнение с начала";
Blockly.Msg.ledstrip_WS8 = "D - Наполнение с конца";



Blockly.Msg.ledstrip_WS1n = "Включить ленту";
Blockly.Msg.ledstrip_WS2n = "Отключить ленту";
Blockly.Msg.ledstrip_WS3n = "Перемещение пикселя в конец";
Blockly.Msg.ledstrip_WS4n = "Перемещение пикселя в начало";
Blockly.Msg.ledstrip_WS5n = "Набор пикселей в начало";
Blockly.Msg.ledstrip_WS6n = "Набор пикселей в конец";
Blockly.Msg.ledstrip_WS7n = "Наполнение с начала";
Blockly.Msg.ledstrip_WS8n = "Наполнение с конца";
Blockly.Msg.ledstrip_WS9 = "  C";
Blockly.Msg.ledstrip_WS10 = "по";
Blockly.Msg.ledstrip_WS11 = "  Цвет";
Blockly.Msg.ledstrip_WS12 = "  Время";




Blockly.Msg.DWIN_BOX = "DWIN - Box";
Blockly.Msg.Dwin_box = "DWIN - Box - Подключение";
Blockly.Msg.Dwin_box_DWIN_SET = "Перед использованием блоков, загрузите прошивку DWIN_SET в дисплей!  RX-11 TX-10";
Blockly.Msg.Dwin_box_none = "DWIN - Box - Очистить дисплей";
Blockly.Msg.Dwin_box_data = "DWIN - Box - Обработка данных";
Blockly.Msg.dwin_box_icon = "DWIN - Box - Графика ID";
Blockly.Msg.dwin_box_text = "DWIN - Box - Текст";
Blockly.Msg.dwin_box_color = "Цвет";
Blockly.Msg.dwin_box_color1n = "Красный";
Blockly.Msg.dwin_box_color2n = "Синий";
Blockly.Msg.dwin_box_color3n = "Зеленый";
Blockly.Msg.dwin_box_color4n = "Белый";
Blockly.Msg.dwin_box_color5n = "Черный";
Blockly.Msg.dwin_box_color6n = "Желтый";
Blockly.Msg.dwin_box_color7n = "Оранжевый";
Blockly.Msg.dwin_box_color8n = "Серый";
Blockly.Msg.dwin_box_bottn = "DWIN - Box - Кнопка №";
Blockly.Msg.dwin_box_text2 = "Текст";
Blockly.Msg.dwin_box_b1n = "Без фиксации";
Blockly.Msg.dwin_box_b2n = "С фиксацией";
Blockly.Msg.dwin_box_bbb = "Режим";
Blockly.Msg.dwin_box_var = "DWIN - Box - Переменная";
Blockly.Msg.dwin_box_varsl = "DWIN - Box - Слайдер";
Blockly.Msg.dwin_box_led = "DWIN - Box - Яркость подсветки";
Blockly.Msg.dwin_box_zum = "DWIN - Box - Зуммер";