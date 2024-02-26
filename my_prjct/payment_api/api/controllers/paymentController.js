/*
payment controller
host: paystack
*/


require('dotenv').config();
const axios = require('axios')

// this class is implemeted using the PAYSTACK api

class PayMentApi{
  /*
  payment api module
  All methods in this class must use the authorization header for every request to paystack
  */
    constructor() {
    this.baseUrl = 'https://api.paystack.co'
    this.options = {headers: {Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`}}
    this.initializeTransaction = this.initializeTransaction.bind(this);
    this.getBalance = this.getBalance.bind(this);
    }

    async initializeTransaction(req, res) {
      /*
      initaializeTransaction: initiates a transactio with paypal
      expect: email and (amount * 100)
      return: authorization-url for secure payment on 200 or 500 on failure
      */

      const { email, amount } = req.body
      const params = {email: email, amount: amount * 100}
      const options = {headers: {Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`, 'Content-Type': 'application/json'}}
      try {
        const paystackRes = await axios.post(`${this.baseUrl}/transaction/initialize`, params, options)
	      return res.status(200).json({message: paystackRes.data})
      } catch(err) {
        console.log(err.message)
        return res.status(500).json({error: 'Internal server error'})
      }
    }

  async verifyTransaction(req, res) {
    /*
    verifyTransaction: confirms transaction status
    expect: reference which would be returned from the initializetransaction method
    return: failure or success
    */

    // ---- on this line database call to get reference which would be stored to db
    const options = this.options;
    try{
      const verifyRes = await axios.get(`${this.baseUrl}/transaction/verify/${reference}`, options)
      return res.status(200).json({message: verifyRes.data})
    } catch (err) {
      return res.status(500).json({error: 'internal server error'})
    }
  }

  async getAllTransactions(req, res) {
    /*
    getAllTransactions: retrieves all transations on this integration
    method: GET
    return: all transactions object or server error on failure
    */

    const options = this.options;
    try{
      const allTransactions = await axios.get(`${this.baseUrl}/transaction`, options)
      return res.status(200).json({message: allTransactions.data})
    } catch (err) {
      console.log(err.message)
    }
  }

  async getTransactionById(req, res) {
    /*
    getTransactionById: retrieves a transation by id on this integration
    method: GET
    return: a transaction object or server error on failure
    */

    const id = request.params.id
    const options = this.options
    try {
      const transaction = await axios.get(`${this.baseUrl}/transaction/${id}`, options)
      return res.status(200).json({message: transaction.data})
    } catch (err) {
      console.log(err.message)
    }
  }

  async createCustomer(req, res) {
    const { email, firstName, lastName, phone} = req.body;
    const params = {email: email, first_name: firstName, last_name: lastName, phone: phone}
    const options = {headers: {Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`, 'Content-Type': 'application/json'}}

    try {
      const createCustomerRequest = await axios.post(`${this.baseUrl}/customer`)
      return res.status(200).json({message: createCustomerRequest.data})
    } catch (err) {
      console.log(err.message)
    }
  }

  async getAllCustomers(req, res) {
    const options = this.options;
    try {
      const allCustomers = await axios.get(`${this.baseUrl}/customer`)
      return res.status(200).json({message: allCustomers.data})
    } catch (err) {
      console.log(err.message)
    }  
  }

  async getCustomer(req, res) {
    const emailOrcode = req.params.email_or_code;
    const options = this.options
    try {
      const customer = await axios.get(`${this.baseUrl}/customer/${emailOrcode}`, options)
      return res.status(200).json({message: customer.data})
    } catch (err) {
      console.log(err.message)
    }
  }

  async getBalance(req, res) {
    /*
    getBalance: retrieve account balance from paystack
    method: GET
    return: object with balance or server error on failure
    */

    const options = this.options;
    try {
      const balance = await axios.get(`${this.baseUrl}/balance`, options)
      return res.status(200).json({message: balance.data})
    } catch(err) {
      console.log(err.message)
    }
  }
}


const paymentApi = new PayMentApi()
module.exports =  paymentApi;
