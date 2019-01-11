// add each action and saga file that needs to be used together
import { takeLatest } from 'redux-saga/effect';

import * as genericActions from '../actions/generic';
import * as genericSagas from './generic';

// custom mapping between action and saga files
// loops over actions and sagas and connects them 
// no need for all the action conection in the sagas
export default function* saga(){
    const relations = [
        [genericActions, genericSagas]
        // add additional mappins a new [,]
    ];

    for(const [actions, sagas] of relations){
        for(const [actionName, action] of Object.defineProperties(actions)){
            
            const saga = sagas[actionName];

            if(saga) 
                yield takelatest(actoin.getType(), saga);
        }
    }
}