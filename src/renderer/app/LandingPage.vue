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
        <div class="w-1/3 border-r shadow-lg h-full" >
          <div class="p-4 w-full">
            <p class="pt-4">Variables:</p>
            <div class="flex">
              <div class="flex-1 m-2">
                <p class="p-2">@[ firstname ]</p>
                <small>Prints the firstname</small>
                <p class="p-2">@[ lastname ]</p>
                <small>Prints the lastname</small>
                <p class="p-2">@[ position ]</p>
                <small>Prints the position</small>
              </div>
            </div>
            <p class="mt-8">Sending To: <vue-xlsx-table @on-select-file="handleSelectedFile">Open Excel</vue-xlsx-table></p>
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
                <button class="p-4 rounded bg-blue mr-8 text-white hover:bg-blue-light shadow-lg" @click.prevent="send()" >Send It</button>
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

export default {
  name: 'landing-page',
  data () {
    return {
      message: 'Hey [firstname] [lastname], we hebben een interessante vacature als [position].',
      contacts: []
    }
  },
  mounted () {
    // console.log(moment(new Date()).format('YYYY-MM-DD'))
  },
  methods: {
    send () {
      this.contacts.forEach(contact => {
        const message = this.formatText(contact)
        const currentDate = moment(new Date()).format('YYYY-MM-DD')
        const availableDate = moment(contact.available_from).format('YYYY-MM-DD')

        if (availableDate < currentDate) {
          imessage.send(`+${contact.telephone}`, message)
        }
      })
    },
    formatText (contact) {
      let message = this.message
      message = message.replace('[firstname]', contact.firstname)
      message = message.replace('[lastname]', contact.lastname)

      return message
    },
    handleSelectedFile (file) {
      const contacts = file.body
      console.log(contacts)
      contacts.forEach(contact => {
        this.contacts.push(contact)
      })
    }
  }
}
</script>
