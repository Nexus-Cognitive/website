<template>
  <component :is="tag" :class="classList">
    <slot name="default"></slot>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

const validator: (v: any) => boolean = (v: any): boolean =>
  typeof v === 'number' || typeof parseInt(v) === 'number'

export default Vue.extend({
  props: {
    cols: {
      default: 1,
      type: [Number, String],
      validator
    },

    colsXs: {
      default: 0,
      type: [Number, String],
      validator
    },

    colsSm: {
      default: 0,
      type: [Number, String],
      validator
    },

    colsMd: {
      default: 0,
      type: [Number, String],
      validator
    },

    colsLg: {
      default: 0,
      type: [Number, String],
      validator
    },

    colsXl: {
      default: 0,
      type: [Number, String],
      validator
    },

    cols2xl: {
      default: 0,
      type: [Number, String],
      validator
    },

    cols3xl: {
      default: 0,
      type: [Number, String],
      validator
    },

    gap: {
      default: 4,
      type: [Number, String],
      validator
    },

    rows: {
      default: 0,
      type: [Number, String],
      validator
    },

    rowsXs: {
      default: 0,
      type: [Number, String],
      validator
    },

    rowsSm: {
      default: 0,
      type: [Number, String],
      validator
    },

    rowsMd: {
      default: 0,
      type: [Number, String],
      validator
    },

    rowsLg: {
      default: 0,
      type: [Number, String],
      validator
    },

    rowsXl: {
      default: 0,
      type: [Number, String],
      validator
    },

    rows2xl: {
      default: 0,
      type: [Number, String],
      validator
    },

    rows3xl: {
      default: 0,
      type: [Number, String],
      validator
    },

    tag: {
      default: 'div',
      type: String
    }
  },

  computed: {
    classList(): string[] {
      return [
        `gap-${this.gap}`,
        'grid',
        `grid-cols-${this.cols}`,
        this.colsXs ? `xs:grid-cols-${this.colsXs}` : '',
        this.colsSm ? `sm:grid-cols-${this.colsSm}` : '',
        this.colsMd ? `md:grid-cols-${this.colsMd}` : '',
        this.colsLg ? `lg:grid-cols-${this.colsLg}` : '',
        this.colsXl ? `xl:grid-cols-${this.colsXl}` : '',
        this.cols2xl ? `2xl:grid-cols-${this.cols2xl}` : '',
        this.cols3xl ? `3xl:grid-cols-${this.cols3xl}` : '',
        this.rows ? `grid-rows-${this.rows}` : '',
        this.rowsXs ? `xs:grid-rows-${this.rowsXs}` : '',
        this.rowsSm ? `sm:grid-rows-${this.rowsSm}` : '',
        this.rowsMd ? `md:grid-rows-${this.rowsMd}` : '',
        this.rowsLg ? `lg:grid-rows-${this.rowsLg}` : '',
        this.rowsXl ? `xl:grid-rows-${this.rowsXl}` : '',
        this.rows2xl ? `2xl:grid-rows-${this.rows2xl}` : '',
        this.rows3xl ? `3xl:grid-rows-${this.rows3xl}` : ''
      ]
    }
  }
})
</script>
