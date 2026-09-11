<script setup lang="ts">
import Icon from './Icon.vue'
import DataComponent from './DataComponent.vue'
import DataTimeInfoCard from './DataTimeInfoCard.vue'

const isOpen = defineModel<boolean>()
const onClose = () => {
  isOpen.value = false
}

const mockData = [
  {
    title: 'Kontaktstelle',
    icon: '/src/assets/icons/Email.svg',
    list: [
      { text: 'Dr Maria Scchmidt' },
      {
        icon: '/src/assets/icons/Email.svg',
        text: 'Lstadtwerke@gmail.com',
        link: 'mailto:Lstadtwerke@gmail.com',
      },
      {
        icon: '/src/assets/icons/PhoneGray.svg',
        text: '+49 431 3643 953',
        link: 'tel:+494313643953',
      },
    ],
  },
  {
    title: 'Lizenz',
    icon: '/src/assets/icons/label.svg',
    list: [{ text: 'CC BY 4.0 (Creative Commons Namensnennung – 4.0 International)' }],
  },
  { title: 'Themen', icon: '/src/assets/icons/label.svg', tags: ['Verkehr', 'Umwelt', 'Energie'] },
  {
    title: 'Formate',
    tags: ['CSV', 'XLS', 'HTML'],
  },
  {
    title: 'Sprachen',
    tags: ['english', 'deutsch', 'francais'],
  },
  {
    title: 'Zeitangaben',
    icon: '/src/assets/icons/calendar.svg',
    items: [
      { text: 'Erstellt am', date: '15.01.2024' },
      { text: 'Aktualisiert am', date: '26.12.2024' },
      { text: 'Aktualisierungsfrequenz', date: 'Alle 5 Minuten' },
      { text: 'Zeitliche Abdeckung', date: '2024-01-01 bis laufend' },
    ],
  },
  {
    title: 'Geographische Abdeckung',
    icon: '/src/assets/icons/LeisureCard.svg',
    list: [{ text: 'München, Bayern' }, { text: 'Geopolitisch: Landkreis München', link: 'link' }],
  },
  {
    title: 'Katalog',
    icon: '/src/assets/icons/globe_icon_2.svg',
    list: [{ text: 'Open Data Portal München' }],
  },
]
</script>

<template>
  <OverlayFullscreen>
    <div class="data-modal-container">
      <div class="modal-header">
        <div class="modal-header-actions">
          <div class="header-statuses">
            <Tag
              :has-close-icon="false"
              :text="$t('landing-page.open-data.chip-three')"
              tone="positive" />
            <Tag
              :has-close-icon="false"
              :has-dot-icon="false"
              text="HVD"
              tone="promote" />
          </div>
          <Icon
            iconUrl="/src/assets/icons/Close.svg"
            :onClick="onClose" />
        </div>
        <p class="display-sm modal-header-title">Verkehrsbedingte Emissionen in Köln- Zusätzliche Informationen</p>
      </div>

      <div class="modal-tag-container">
        <p class="body-lg modal-tag-text">HVD Kategorie: Mobilitätsdaten gemäß EU-Verordnung über HVD</p>
      </div>

      <DataComponent
        v-for="({ title, icon, list, items, tags }, key) in mockData"
        :key="key"
        :title="title"
        :icon="icon"
        :list="list">
        <template
          #content
          v-if="!list">
          <template v-if="items">
            <DataTimeInfoCard :items="items" />
          </template>
          <template v-if="tags">
            <div class="tags-container">
              <Tag
                v-for="(tag, i) in tags"
                :key="i"
                :has-close-icon="false"
                :has-dot-icon="false"
                :text="tag" />
            </div>
          </template>
        </template>
      </DataComponent>
    </div>
  </OverlayFullscreen>
</template>

<style scoped>
.data-modal-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.data-modal-container .modal-header {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.data-modal-container .modal-header .modal-header-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-header .modal-header-actions .header-statuses {
  display: flex;
  gap: 8px;
  align-items: center;
}
.data-modal-container .modal-header .modal-header-title {
  color: var(--color-neutral-700);
}

.data-modal-container .modal-tag-container {
  padding: 6px;
  border-radius: 4px;
  border: 1px solid var(--color-neutral-300);
  background-color: var(--color-promote-400);
}
.data-modal-container .modal-tag-container .modal-tag-text {
  color: var(--color-primary-800);
}

.data-modal-container .tags-container {
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--color-primary-800);
}
</style>
