import React from 'react'
import { Fonts } from './fonts'
import { Preload } from './preload'

export const CustomHead = () => (
  <React.Fragment>
    <Fonts />
    <Preload />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="icon" sizes="192x192" href="/assets/img/icon-512.png" />
    <link rel="apple-touch-icon" href="/assets/img/icon-ios" />
    <meta
      name="Description"
      content="Programming.in.th provides you with the fundamentals of algorithmic problem-solving, an important skill to differentiate yourself as a programmer in an increasingly technologically advanced world."
    />
    <meta property="og:url" content="https://staging.programming.in.th" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="programming.in.th" />
    <meta
      property="og:description"
      content="Programming.in.th provides you with the fundamentals of algorithmic problem-solving, an important skill to differentiate yourself as a programmer in an increasingly technologically advanced world."
    />
    <meta property="og:image" content="/assets/img/og.jpg" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary" />
    <title>programming.in.th | β</title>
  </React.Fragment>
)