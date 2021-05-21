#En consola interactiva con comando irb
# Para bloque de comentarios en ruby
=begin
    puts 'hola mundo en ruby'
=end

class HolaMundo
    def initialize()
    end

    def saluda()
        puts "Hola mundo en Ruby"
    end
end

objeto = HolaMundo.new()
objeto.saluda
#gets() #Para que permanezca en el promt y con enter sale, estilo c
