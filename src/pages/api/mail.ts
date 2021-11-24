/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-anonymous-default-export */
require('dotenv').config()
const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req: any, res: any) => {
  try {
    const body = JSON.parse(req.body)

    const message = `
      Nome: ${body.name}\r\n
      Email: ${body.email}\r\n
      Empresa: ${body.companie}\r\n
      Mensagem: ${body.message}\r\n
    `
    const data = {
      to: 'contato@prify.io',
      from: 'alan.vital@lsbd.ufc.br',
      reply_to: body.email,
      subject: `Novo contato: "${body.message
        .split(' ')
        .slice(0, 5)
        .join(' ')}"`,
      text: message,
      html: `
      <body style="box-sizing: border-box; margin: 0; padding: 0; font-family: sans-serif;">
        <section>
          <div style="margin: 0 auto; background: #5C00FF; width: 600px; height: 190px; border: 1px solid #5C00FF">
              <img src="http://cdn.mcauto-images-production.sendgrid.net/c191f559cd5eb3d7/aa551b48-38f0-422c-811b-321ead935c80/119x60.png" style="max-width: 120px; max-height: 50px; margin: 20px"/>
              <h1 style="color: #FFFFFF; font-size: 18px; margin: 20px">Nova mensagem de contato</h1>
          </div>
          <div style="margin: 0 auto; min-height: 475px; width: 600px; border: 1px solid #5C00FF">
              <h1 style="margin: 20px; font-size: 18px; color: #5C00FF; margin: 32px 20px">Informações Gerais</h1>
              <p  style="margin: 20px; font-size: 14px; color: rgba(44, 62, 81, 0.87);; margin: 20px 20px; font-weight: bold;">Nome</p>
              <p  style="margin: 20px; font-size: 16px; color: rgba(44, 62, 81, 0.87);; margin: 24px 20px">${body.name}</p>
              <p style="margin: 20px; font-size: 14px; color: rgba(44, 62, 81, 0.87);; margin: 20px 20px; font-weight: bold;">E-mail</p>
              <p  style="margin: 20px; font-size: 16px; color: rgba(44, 62, 81, 0.87);; margin: 24px 20px">${body.email}</p>
              <p style="margin: 20px; font-size: 14px; color: rgba(44, 62, 81, 0.87);; margin: 20px 20px; font-weight: bold;">Mensagem</p>
              <p  style="margin: 20px; font-size: 16px; color: rgba(44, 62, 81, 0.87);; margin: 24px 20px">${body.message}</p>
          </div>
        </section>
      </body>
  `
    }

    await mail.send(data)
    res.status(200).json({ status: 'ok' })
  } catch (e) {
    console.log(e)
  }
}
