/*
 2012 Copyright (c) Seeed Technology Inc.

 Authors: Albert.Miao & Loovee, 
 Visweswara R (with initializtion code from TFT vendor)

 This library is free software; you can redistribute it and/or
 modify it under the terms of the GNU Lesser General Public
 License as published by the Free Software Foundation; either
 version 2.1 of the License, or (at your option) any later version.

 This library is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public
 License along with this library; if not, write to the Free Software
 Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

*/
#ifndef LCD_h
#define LCD_h

#include <Arduino.h>

#include <avr/pgmspace.h>

#include <SPI.h>

//Basic Colors
#define WHITE          0xFFFF
#define BLACK          0x0000	  
#define BLUE           0x001F  
#define BRED           0XF81F
#define GRED 		   0XFFE0
#define GBLUE		   0X07FF
#define RED            0xF800
#define MAGENTA        0xF81F
#define GREEN          0x07E0
#define CYAN           0x7FFF
#define YELLOW         0xFFE0
#define BROWN 		   0XBC40 
#define BRRED 		   0XFC07 
#define GRAY  		   0X8430

#define LCD_CMD      0
#define LCD_DATA     1

#define FONT_1206    12
#define FONT_1608    16

#define LCD_WIDTH    240
#define LCD_HEIGHT   320


#define __LCD_CS_OUT()    DDRB |= 0x04
#define __LCD_CS_CLR()    PORTB &=~ 0x04
#define __LCD_CS_SET()    PORTB |=  0x04

#define __LCD_DC_OUT()    DDRD |= 0x80
#define __LCD_DC_CLR()    PORTD &=~ 0x80
#define __LCD_DC_SET()    PORTD |=  0x80

#define __LCD_BKL_OUT()   DDRB |= 0x02
#define __LCD_BKL_OFF()   PORTB &=~ 0x02
#define __LCD_BKL_ON()    PORTB |=  0x02
    
#define __LCD_WRITE_BYTE(__DATA)       SPI.transfer(__DATA)


#define __XPT2046_CS_DISABLE()    DDRD |= 0x10; PORTD |=  0x10


extern const uint8_t c_chFont1206[95][12];
extern const uint8_t c_chFont1608[95][16];


class TFT
{

public:

	void lcd_write_byte(uint8_t chByte, uint8_t chCmd)
	{
	    if (chCmd) {
	        __LCD_DC_SET();
	    } else {
	        __LCD_DC_CLR();
	    }
	    
	    __LCD_CS_CLR();
	    __LCD_WRITE_BYTE(chByte);
	    __LCD_CS_SET();
	}
	
	inline void lcd_write_word(uint16_t hwData)
	{
		__LCD_DC_SET();
	    __LCD_CS_CLR();
	    __LCD_WRITE_BYTE(hwData >> 8);
	    __LCD_WRITE_BYTE(hwData & 0xFF);
	    __LCD_CS_SET();
	}

	
	//write a word(two bytes) to the specified register of lcd.
	//chRegister address of the register of lcd.
	//hwValue value is written to the specified register.
	void lcd_write_register(uint8_t chRegister, uint8_t chValue)
	{
		lcd_write_byte(chRegister, LCD_CMD);
		lcd_write_byte(chValue, LCD_DATA);
	}

	//set the specified position of cursor on lcd.
	//hwXpos specify x position
	//hwYpos specify y position
	void lcd_set_cursor(uint16_t hwXpos, uint16_t hwYpos)
	{
		if (hwXpos >= LCD_WIDTH|| hwYpos >= LCD_HEIGHT) {
			return;
		}

		lcd_write_register(0x02, hwXpos >> 8);
		lcd_write_register(0x03, hwXpos & 0xFF); //Column Start
		lcd_write_register(0x06, hwYpos >> 8);
		lcd_write_register(0x07, hwYpos & 0xFF); //Row Start
	}

    //clear the lcd with the specified color.
	void lcd_clear_screen(uint16_t hwColor)  
	{
		uint32_t i, wCount = LCD_WIDTH;
	
		wCount *= LCD_HEIGHT;
		
		lcd_set_cursor(0, 0);
		lcd_write_byte(0x22, LCD_CMD);
	    
	    __LCD_DC_SET();
		__LCD_CS_CLR();
		for (i = 0; i < wCount; i ++) {
			__LCD_WRITE_BYTE(hwColor >> 8);
			__LCD_WRITE_BYTE(hwColor & 0xFF);
		}
		__LCD_CS_SET();
	}

	void lcd_init ();
	void lcd_draw_point(uint16_t hwXpos, uint16_t hwYpos, uint16_t hwColor);
	void lcd_display_char(uint16_t hwXpos, //specify x position.
                         uint16_t hwYpos, //specify y position.
                         uint8_t chChr,   //a char is display.
                         uint8_t chSize,  //specify the size of the char
                         uint16_t hwColor); //specify the color of the char
	//display a number at the specified position on lcd.
	void lcd_display_num(uint16_t hwXpos,  //specify x position.
	                          uint16_t hwYpos, //specify y position.
	                          uint32_t chNum,  //a number is display.
	                          uint8_t chLen,   //length ot the number
	                          uint8_t chSize,  //specify the size of the number
	                          uint16_t hwColor); //specify the color of the number
	//display a string at the specified position on lcd.
	void lcd_display_string(uint16_t hwXpos, //specify x position.
	                         uint16_t hwYpos,   //specify y position.
	                         const uint8_t *pchString,  //a pointer to string
	                         uint8_t chSize,    // the size of the string 
	                         uint16_t hwColor);  // specify the color of the string
    void lcd_draw_line(uint16_t hwXpos0, //specify x0 position.
                      uint16_t hwYpos0, //specify y0 position.
                      uint16_t hwXpos1, //specify x1 position.
                      uint16_t hwYpos1, //specify y1 position.
                      uint16_t hwColor); //specify the color of the line
    void lcd_draw_circle(uint16_t hwXpos,  //specify x position.
                        uint16_t hwYpos,  //specify y position.
                        uint16_t hwRadius, //specify the radius of the circle.
                        uint16_t hwColor);  //specify the color of the circle.
    void lcd_fill_rect(uint16_t hwXpos,  //specify x position.
                   uint16_t hwYpos,  //specify y position.
                   uint16_t hwWidth, //specify the width of the rectangle.
                   uint16_t hwHeight, //specify the height of the rectangle.
                   uint16_t hwColor);  //specify the color of rectangle.
    void lcd_draw_v_line(uint16_t hwXpos, //specify x position.
                        uint16_t hwYpos, //specify y position. 
                        uint16_t hwHeight, //specify the height of the vertical line.
                        uint16_t hwColor);  //specify the color of the vertical line.
    void lcd_draw_h_line(uint16_t hwXpos, //specify x position.
                        uint16_t hwYpos,  //specify y position. 
                        uint16_t hwWidth, //specify the width of the horizonal line.
                        uint16_t hwColor); //specify the color of the horizonal line.
	void lcd_draw_rect(uint16_t hwXpos,  //specify x position.
                      uint16_t hwYpos,  //specify y position.
                      uint16_t hwWidth, //specify the width of the rectangle.
                      uint16_t hwHeight, //specify the height of the rectangle.
                      uint16_t hwColor);  //specify the color of rectangle.
                       
};

extern TFT Tft;

#endif

/*********************************************************************************************************
  END FILE
*********************************************************************************************************/
