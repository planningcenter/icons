# Purpose:
#   Provide an `icon` helper to Rails controllers and views.
# Installation:
#   * Copy/paste this into the `app/helpers/` directory in your app
#   * Restart your local server
# Usage:
#   <%= icon("interfaces/chevron-down") %>
# Expectations:
#   If a view uses an icon that does not exist in planningcenter/icons,
#   a placeholder `[i]` will be rendered and Bugsnag notified.

module IconHelper
  def icon(name)
    begin
      File.read(
        File.join(
          Rails.root, "node_modules", "@planning-center", "icons", "svgs", "#{name}.svg"
        )
      ).html_safe
    rescue => exception
      Bugsnag.notify(exception)
      "[i]"
    end
  end
end
