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
        this.db.database().ref(this.boardName).set(JSON.parse(this.lastSend));        
    }

    registerListener() {
        this.db.database().ref(this.boardName).on('value',this.handleDataUpdate);
    }

    handleDataUpdate = (data) => {
        this.callback.call(null, data.val());
    }

}
