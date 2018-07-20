<template>
  <div class="h-full bg-grey-lighter">
    <div class="h-full">
      <div class="w-full bg-grey-light fixed">
        <div class="flex h-full p-4">
          <div class="flex-1">
            <span class="text-light">SendIt</span>
          </div>
        </div>
      </div>
      <div class="flex h-full">
        <div class="w-1/3 border-r shadow-lg h-full overflow-auto" >
          <div class="p-4 w-full">
            <p class="pt-4">Variables:</p>
            <div class="flex">
              <div class="flex-1 m-2">
                <p class="py-2">[firstname]</p>
                <small>Prints the firstname</small>
                <p class="py-2">[lastname]</p>
                <small>Prints the lastname</small>
                <p class="py-2">[position]</p>
                <small>Prints the position</small>
              </div>
            </div>
            <p class="mt-8">Send To: 
              <vue-xlsx-table @on-select-file="handleSelectedFile" v-if="contacts.length === 0">Import Excel</vue-xlsx-table> 
              <button class="p-2 bg-blue text-white text-xs hover:bg-blue-light" @click.prevent="contacts = []" v-else>Reset</button>
            </p>
            <div class="pt-4" v-for="contact in contacts" :key="contact.name">
              <p class="pl-4"><b>Name:</b> {{ contact.firstname }} {{ contact.lastname }}</p>
              <p class="pl-4"><b>Phone:</b> +{{ contact.telephone }}</p>
              <p class="pl-4"><b>position:</b> {{ contact.position }}</p>
            </div>
          </div>
        </div>
        <div class="w-full h-full m-auto block">
          <p class="mt-32 text-center">Your Message</p>
          <div class="w-full mt-8">
            <limited-textarea class="rounded-lg m-auto block shadow-lg p-8" :max="160" cols="50" rows="10" v-model="message"/>
            <div class="text-right pt-4">
              <small class="mr-24 text-right" :class="(message.length === 160) ? 'text-red' : ''">
                {{ message.length }} / 160
                <icon :fontAwesomeIcon="['fas', 'exclamation-triangle']" style="text-red" v-if="message.length === 160"/>
              </small>
              <div class="text-center">
                <button class="p-4 rounded bg-blue text-white hover:bg-blue-light shadow-lg" @click.prevent="send()" v-if="!success">{{ (sending) ? 'Sending...' : 'Send It' }}</button>
                <div class="bg-green text-white rounded p-4 mx-32 my-4" v-if="success">
                  <p class="">Message send successfully</p>
                </div>

                <div class="bg-red text-white rounded p-4 mx-32 my-4" v-if="error">
                  <p class="">{{ error }}</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imessage from 'osa-imessage'
import moment from 'moment'
// import { setTimeout } from 'timers'

export default {
  name: 'landing-page',
  data () {
    return {
      message: 'Hey [firstname], we hebben een interessante vacature als [position].',
      contacts: [],
      sending: false,
      success: false,
      error: false
    }
  },
  mounted () {
    // console.log(moment(new Date()).format('YYYY-MM-DD'))
  },
  methods: {
    send () {
      if (this.contacts.length === 0) {
        this.error = 'Please import contacts before sending your message.'

        setTimeout(() => {
          this.error = false
        }, 2500)

        return
      }

      this.sending = true
      this.contacts.forEach(contact => {
        const message = this.formatText(contact)
        const currentDate = moment(new Date()).format('YYYY-MM-DD')
        const availableDate = moment(contact.available_from).format('YYYY-MM-DD')

        if (availableDate < currentDate) {
          imessage.send(`+${contact.telephone}`, message)
          this.sendCount++
        }
      })

      this.success = true

      setTimeout(() => {
        this.success = false
        this.contacts = []
      }, 2500)
    },
    formatText (contact) {
      let message = this.message
      message = message.replace('[firstname]', contact.firstname)
      message = message.replace('[lastname]', contact.lastname)
      message = message.replace('[position]', contact.position)

      return message
    },
    handleSelectedFile (file) {
      try {
        const contacts = file.body
        contacts.forEach(contact => {
          this.contacts.push(contact)
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
