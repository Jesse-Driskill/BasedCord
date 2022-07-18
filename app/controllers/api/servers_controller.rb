class Api::ServersController < ApplicationController
    def index
        @servers = Server.all
        render :index
    end

    def create
        @server = Server.new(server_params)
        @server.owner_id = current_user.id
        if @server.save
            render :show
        else   
            render json: @server.errors.full_messages, status: 422
        end
    end

    def show
        
        @server = Server.where("id = #{params[:id]}")
        render :show
    end


    def destroy 
        @server = Server.find_by(id: params[:id])
        @server.destroy; 
    end

    private
    def server_params
        params.require(:server).permit(:owner_id, :name, :id)
    end

    def userid
        params[:user]
    end
end
