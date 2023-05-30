#include <Arduino.h>
#line 1 "C:\\Users\\ASUS\\Desktop\\ArduBlock 2.0\\app\\compilation\\arduino\\ino\\sketch.ino"
#line 1 "C:\\Users\\ASUS\\Desktop\\ArduBlock 2.0\\app\\compilation\\arduino\\ino\\sketch.ino"
int x = 0;
int y = 1;

#include "TM1637.h"
TM1637 tm1637(9,10);

long temps1=0 ;

#line 9 "C:\\Users\\ASUS\\Desktop\\ArduBlock 2.0\\app\\compilation\\arduino\\ino\\sketch.ino"
void setup();
#line 22 "C:\\Users\\ASUS\\Desktop\\ArduBlock 2.0\\app\\compilation\\arduino\\ino\\sketch.ino"
void loop();
#line 9 "C:\\Users\\ASUS\\Desktop\\ArduBlock 2.0\\app\\compilation\\arduino\\ino\\sketch.ino"
void setup() {
  tm1637.init();
  tm1637.set(BRIGHT_TYPICAL);

  pinMode(2, INPUT_PULLUP);
  pinMode(3, INPUT_PULLUP);
  pinMode(5, OUTPUT);
  pinMode(5, OUTPUT);
     tm1637.point(POINT_OFF);
   tm1637.display(x);

}

void loop() {
    if (!digitalRead(2)) {
      x = x + 5;
      tm1637.point(POINT_OFF);
       tm1637.display(x);
       delay(300);
    }
    if (!digitalRead(3)) {
      y = y * -1;
      delay(300);
    }
    if (y == -1) {
      tone(5,4000,0);
       delay(0);
      if ((millis()-temps1)>=1*1000) {
        temps1=millis();
        x = x - 1;
      }
      if (x <= 0) {
        x = 0;
        y = 1;
        noTone(5);
      }
      tm1637.point(POINT_OFF);
       tm1637.display(x);
       }

}
