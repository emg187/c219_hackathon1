class GenericFBModel {
    constructor(gameName, changeCallbackFunction) {
        this.boardName = gameName;
        this.db;
        this.callback = changeCallbackFunction;
        this.lastSend = null;

        this.start();
    }

    start = () => {
        this.db=firebase;
        this.db.initializeApp(firebaseConfig);
        this.registerListener();
    }

    saveState(newState) {
        this.lastSend = JSON.stringify(newState);
        if (this.lastSend === null) {
            this.db.database().ref(this.boardName).set(newState);
        }
    }

    registerListener() {
        this.db.database().ref(this.boardName).on('value',this.handleDataUpdate);
    }

    handleDataUpdate = (data) => {
        var currentData = JSON.stringify(data.val());
        if(currentData!=this.lastSend){
            this.callback.call(null,data.val());
        }
    }



    // uploadCardToDb(card)
    // {
    //     console.log('saving');
    //     codeNamesDb.saveState({
    //         word: card.word,
    //         type: card.type
    //     })     
    // }

    
}

