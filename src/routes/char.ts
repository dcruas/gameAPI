import { getRepository, ILike } from "typeorm";
import { Router } from "express";
import Char from "../entities/Char";

const char = Router();

char.get("/", async (req, res) => {
  const tabela = getRepository(Char);

  let result;
  try {
    result = await tabela.find();
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }

  res.json(result);
});

char.get("/c/:char", async (req, res) => {
  const tabela = getRepository(Char);
  const { params } = req;
  const search = params.char;

  let result;
  try {
    result = await tabela.find({ where: { nome: ILike(`%${search}%`) } });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }

  res.json(result);
});

char.post("/", async (req, res) => {
  const tabela = getRepository(Char);

  const { body } = req;

  const newChar = new Char();
  newChar.nome = body.nome;
  newChar.classe = body.classe;

  try {
    await tabela.save(newChar);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }

  res.status(201).json({ ok: true });
});

export default char;
