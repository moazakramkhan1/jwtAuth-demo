package routes

import (
	"jwtauth/controller"

	"github.com/gofiber/fiber/v2"
)

func Setup(App *fiber.App) {

	App.Post("/api/register", controller.Register)
	App.Post("/api/login", controller.Login)
	App.Get("/api/user", controller.User)
	App.Post("/api/logout", controller.Logout)
}
