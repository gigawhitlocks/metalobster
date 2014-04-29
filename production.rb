  class << Rails.application
    def domain
      "$LOBSTERDOMAIN"
    end

    def name
      "$LOBSTERNAME"
    end
  end

  Rails.application.routes.default_url_options[:host] = Rails.application.domain
