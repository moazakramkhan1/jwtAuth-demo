package database

import (
	"jwtauth/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {

	connection, err := gorm.Open(mysql.Open("root:maziak47@/authentication"), &gorm.Config{})
	if err != nil {
		panic("error while connect to database")
	}
	DB = connection
	connection.AutoMigrate(&models.User{})
}
