import {expect} from './helper'
import boilerplate from '../src'

describe("boilerplate", function() {
  it("is awesome", function() {
    expect(boilerplate()).to.eq('awesome')
  })
})
