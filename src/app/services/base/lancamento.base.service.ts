/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5ddb2153c758666a71707058
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE lancamentoBaseService PLEASE EDIT ../lancamento.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Lancamento } from '../../domain/cc_db/lancamento';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../lancamento.service.ts
 */

/*
 * SCHEMA DB lancamento
 *
	{
		descricao: {
			type: 'String'
		},
		pg: {
			type: 'Boolean'
		},
		valor: {
			type: 'Decimal'
		},
		vencimento: {
			type: 'Date'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class LancamentoBaseService {

    private lancamentoCollection: AngularFirestoreCollection<Lancamento>;
    constructor(
        private afs: AngularFirestore,
        private fns: AngularFireFunctions
    ) {
        this.lancamentoCollection = afs.collection<Lancamento>('lancamento');
    }


    // CRUD METHODS

    /**
    * lancamentoService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Lancamento): Promise<DocumentReference> {
        return this.lancamentoCollection.add(item);
    }

    /**
    * lancamentoService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string) {
        const itemDoc: AngularFirestoreDocument<any> = this.lancamentoCollection.doc(id);
        itemDoc.delete();
    }

    /**
    * lancamentoService.get
    *   @description CRUD ACTION get
    *   @returns lancamento
    *
    */
    get(id: string): AngularFirestoreDocument<Lancamento> {
        return this.afs.doc<Lancamento>('lancamento/' + id);
    }

    /**
    * lancamentoService.list
    *   @description CRUD ACTION list
    *   @returns ARRAY OF lancamento
    *
    */
    list(): Observable<Lancamento[]> {
        return this.afs.collection('lancamento').snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Lancamento;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    /**
    * lancamentoService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(itemDoc: AngularFirestoreDocument<Lancamento>, item: Lancamento): Promise<void> {
        return itemDoc.update(item);
    }


    // Custom APIs

}
