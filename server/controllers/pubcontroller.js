const { Item, Category, Ingredient } = require("../models/index");

class Controller {
  static async getItem(req, res, next) {
    try {
      const item = await Item.findAll({
        include: ["Category", "Ingredient"],
      });
      res.status(200).json({
        data: item,
      });
    } catch (err) {
      next(err);
    }
  }

  //findItem
  static async findItem(req, res, next) {
    try {
      const id = +req.params.id;
      const item = await Item.findOne({
        where: {
          id,
        },
        include: ["Category", "Ingredient"],
      });
      if (!item) {
        throw { name: "notFound" };
      }
      res.status(200).json(item);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
