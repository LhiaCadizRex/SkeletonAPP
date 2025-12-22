import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Dbservice {

  public db!: SQLiteObject;

  //OBSERVABLE
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite,
    private toastController: ToastController) {
    this.initDatabase();

  }

  private initDatabase() {
    this.sqlite.create({
      name: 'nomadBudgetdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {

      this.isDBReady.next(true);
      this.db = db;
      this.createTables();
      this.isDBReady.next(true); //true cuando la db este lista
      this.presentToast('Base de datos y tabla creada');

    }).catch(error => this.presentToast('Error al insertar usuario: ' + error));

  }

  private createTables() {
    //TABLA USUARIOS
    this.db.executeSql(
      `CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT,
      apellido TEXT,
      usuario TEXT,
      email TEXT,
      password TEXT
      )`, [])
      .then(() => this.presentToast('Tabla creada'))
      .catch(error => this.presentToast('Error creando tabla' + error));

    //TABLA VIAJES
    this.db.executeSql(
      `CREATE TABLE IF NOT EXISTS viajes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    destino TEXT,
    tipo TEXT,
    presupuesto REAL,
    fechaInicio TEXT,
    usuario_id INTEGER,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    )`, [])
      .then(() => this.presentToast('Tabla creada'))
      .catch(error => this.presentToast('Error creando tabla' + error));
  }
  //INSERTAR NUEVO USUARIO
  insertUsuario(nombre: string, apellido: string, usuario: string, email: string, password: string) {
    return this.db.executeSql(`INSERT INTO usuarios (nombre, apellido, usuario, email, password) VALUES (?, ?, ?, ?, ?);
      `, [nombre, apellido, usuario, email, password])
      .then(() => this.presentToast('Usuario insertado correctamente'))
      .catch(error => this.presentToast('Error al insertar usuario: ' + error));

  }
  //VALIDACION USUARIO
  validarUsuario(email: string, password: string) {
    return this.db.executeSql(`SELECT * FROM usuarios WHERE email = ? AND password = ?`, [email, password])
      .then((res) => {
        if (res.rows.length > 0) {
          return res.rows.item(0);
        } else {
          return null;
        }
      })
      .catch(error => this.presentToast('Error al obtener usuario: ' + error));
  }
  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  //INSERTAR NUEVO VIAJE
  insertViaje(nombre: string, destino: string, tipo: string, presupuesto: number, fechaInicio: string) {
    return this.db.executeSql(
      `INSERT INTO viajes (nombre, destino, tipo, presupuesto, fechaInicio, usuario_id) 
     VALUES (?, ?, ?, ?, ?, ?)`
      , [nombre, destino, tipo, presupuesto, fechaInicio])
      .then(() => this.presentToast('Viaje creado correctamente'))
      .catch(error => this.presentToast('Error al insertar viaje: ' + error));

  }

  //VALIDAR NUEVO VIAJE
  validarViaje(viaje: any, usuario_id: number) {
    return this.db.executeSql(`SELECT * FROM viajes WHERE viaje = ? AND usuario_id = ?`, [viaje, usuario_id])
      .then((res) => {
        if (res.rows.length > 0) {
          return res.rows.item(0);
        } else {
          return null;
        }
      })
      .catch(error => this.presentToast('Error al obtener viaje: ' + error));

  }

  //RESET CONTRASEÑA
  async reset(email: string): Promise<boolean> {
  const sql = 'SELECT 1 FROM usuarios WHERE email = ? LIMIT 1';
  const result = await this.db.executeSql(sql, [email]);

  return result.rows.length > 0;
}


}
