const CrudRepository = require("./crud-repository");
const { Ticket } = require("../models");
const { response } = require("express");

class TicketRepository extends CrudRepository {
  constructor() {
    super(Ticket);
  }

  async getpendingTickets() {
    const response = await Ticket.findAll({
      where: {
        status: "PENDING",
      },
    });
    return response;
  }
}

module.exports = TicketRepository;
