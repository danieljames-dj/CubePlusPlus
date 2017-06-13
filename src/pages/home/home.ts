import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController, public storage: Storage, public file: File) {
		storage.ready().then(() => {
			var x = 4;
			storage.get('hi').then((val) => {
				if (val == null)
					storage.set('hi', 6);
				else {
					val++;
					storage.set('hi', val);
				}
				storage.get('hi').then((val) => {
					console.log(val);
				})
			})
		});
		// File.listDir(this.getRootFolder(device.platform), "");
		let filedir = file.externalRootDirectory + 'myDir/'
		let record_file = 'myFile'
		this.file.writeExistingFile(filedir, record_file, 'text').then(() =>{
			console.log('File wrote')
		}).catch(err => { console.log(err.message) });
	}

}
