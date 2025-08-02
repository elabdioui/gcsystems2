"use client"

import type React from "react"
import { useState } from "react"
import emailjs from '@emailjs/browser'
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Remplacez ces valeurs par vos vraies clés EmailJS
const EMAILJS_SERVICE_ID = "service_4ye5xn7"
const EMAILJS_TEMPLATE_ID = "template_474786h"
const EMAILJS_PUBLIC_KEY = "hhE0v__Y0x38n_ETR"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    societe: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: null, message: '' })

    try {
      const templateParams = {
        to_email: 'elabdiouihaitham@gmail.com',
        from_name: formData.nom,
        from_email: formData.email,
        phone: formData.telephone,
        company: formData.societe,
        message: formData.message,
        subject: `Nouvelle demande de devis - ${formData.societe || formData.nom}`
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID, 
        EMAILJS_TEMPLATE_ID, 
        templateParams, 
        EMAILJS_PUBLIC_KEY
      )
      
      setStatus({
        type: 'success',
        message: 'Votre demande a été envoyée avec succès ! Nous vous recontacterons rapidement.'
      })
      
      // Reset form
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        societe: "",
        message: "",
      })
    } catch (error) {
      console.error('Erreur EmailJS:', error)
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à sécuriser votre entreprise ? Contactez nos experts pour une étude personnalisée de vos besoins
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Nos Coordonnées</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                  <p className="text-gray-600 text-lg">+212 639 737 400</p>
                  <p className="text-sm text-gray-500">Disponible 24h/7j pour les urgences</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 text-lg">sales@gcsystems.ma</p>
                  <p className="text-sm text-gray-500">Réponse sous 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                  <p className="text-gray-600">
                    13 Rue Ahmed El Majjati
                    <br />
                    Résidence Les Alpes - 1er étage - n°8
                    <br />
                    Maarif, CASABLANCA
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Horaires</h4>
                  <p className="text-gray-600">
                    Lundi - Vendredi: 8h00 - 18h00
                    <br />
                    Samedi: 8h00 - 12h00
                    <br />
                    <span className="text-red-600 font-medium">Urgences: 24h/7j</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Contact Rapide</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white flex-1">
                  <Phone className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Phone className="mr-2 h-4 w-4" />
                  Rappel gratuit
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-gray-200 shadow-lg">
            <CardHeader className="bg-gray-50">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <Send className="mr-3 h-6 w-6 text-red-600" />
                Demande de Devis Gratuit
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {/* Status Message */}
              {status.type && (
                <div className={`mb-6 p-4 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom et Prénom *
                    </label>
                    <Input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className="border-gray-300"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-gray-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <Input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="border-gray-300"
                      placeholder="+212 6XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="societe" className="block text-sm font-medium text-gray-700 mb-2">
                      Société
                    </label>
                    <Input
                      id="societe"
                      name="societe"
                      type="text"
                      value={formData.societe}
                      onChange={handleChange}
                      className="border-gray-300"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="border-gray-300"
                    placeholder="Décrivez votre projet ou vos besoins en détail..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white text-lg py-3"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Envoyer la demande
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Localisation</h3>
            <p className="text-gray-600">Retrouvez-nous à Casablanca, Maarif</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8445182449647!2d-7.6262!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2da31e0a2d3%3A0x5b0b0b0b0b0b0b0b!2s13%20Rue%20Ahmed%20El%20Majjati%2C%20Casablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
