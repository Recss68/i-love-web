import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'learningJournal',
  title: 'Learning Journal',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Een korte titel voor je logboek-entry',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Beschrijf wat je vandaag hebt geleerd, gedaan of ontdekt.',
    }),
    defineField({
      name: 'date',
      title: 'Datum',
      type: 'date',
      description: 'Kies de datum van deze logboek-entry',
    }),
  ],
})