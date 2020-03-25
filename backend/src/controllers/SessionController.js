import connection from "../database/connection";

class SessionController {
  async store(req, res) {
    const { id } = req.body;
    const ongs = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ongs) {
      return res.status(400).json({ error: "No ONG found with this id" });
    }
    return res.json(ongs);
  }
}

export default new SessionController();
