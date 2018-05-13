# frozen_string_literal: true

class TopHomeController < ApplicationController
  layout "top_home"

  def index
    @top_home_props = { name: "Stranger" }
  end
end
