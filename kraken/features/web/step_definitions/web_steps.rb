if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'

  Then(/^I store a variable with the current url$/) do
    $url_variable = @driver.current_url    
    File.write('./.variable.txt', $url_variable)
    puts($url_variable) 
  end

  Given(/^I navigate to page with the url stored in the variable$/) do
    $url_variable = IO.read("./.variable.txt")  
    puts($url_variable)
    @driver.navigate.to $url_variable
    sleep 2
  end

  Given(/^I log in as administrator$/) do
    $baseUrl = IO.read("./.baseUrl.txt") 
    @driver.navigate.to $baseUrl + "ghost/#/signin"
    sleep 1
    @driver.find_element(:css, "input[name=identification]").send_keys("ghost-author@example.com")
    sleep 1
    @driver.find_element(:css, "input[name=password]").send_keys("Pruebas10automatizadas")
    sleep 1
    @driver.find_element(:css, "button.login").click
    sleep 1
  end

  Then(/^I click on element containing "([^\"]*)"$/) do |text|
    @driver.find_element(:xpath, "//*[text()[contains(.,'" + text + "')]]").click
    sleep 2
  end

  Then(/^I clear input field having css selector "([^\"]*)"$/) do |selector|
    @driver.find_element(:css, selector).clear
    sleep 2
  end

  Then(/^I navigate to home page$/) do
    $baseUrl = IO.read("./.baseUrl.txt") 
    @driver.navigate.to $baseUrl
    sleep 2
  end

  Then(/^I navigate to login page$/) do
    $baseUrl = IO.read("./.baseUrl.txt") 
    @driver.navigate.to $baseUrl + "ghost/#/signin"
    sleep 2
  end

  Then(/^I should not see text "(.*?)"$/) do |text|
    if @driver.page_source.include?(text)
      raise 'ERROR: Assertion failed'
    end
  end

end