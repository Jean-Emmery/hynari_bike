import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
 } from '@nestjs/websockets';
 import { Logger } from '@nestjs/common';
 import { Socket, Server } from 'socket.io';
 import { BikesService }  from '../bikes/bikes.service'
 import { k } from '@hynari_bike/knex-lib';

 @WebSocketGateway()
 export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');
  private users = 0

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: string): void {
   this.server.emit('msgToClient', payload);
  }

  @SubscribeMessage('posToServer')
  handlePosition(client: Socket, payload: string): void {
    console.log("suscribeMessage")
    if (payload) {
      console.log(payload)
      this.server.emit('msgToClient', payload);
      k.getBikeLatLngDb(payload).then((res) => {
        console.log("res")
        console.log(res)
      })
      const res =  k.updateBikeLatLngDb(payload)
      //console.log(res)
    } else {
      console.log("no payload")
    }
  }

  afterInit(server: Server) {
   this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
   this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.users++;
    //this.logger.log(client)
   this.logger.log(`Client connected: ${client.id}`);
  }
 }
