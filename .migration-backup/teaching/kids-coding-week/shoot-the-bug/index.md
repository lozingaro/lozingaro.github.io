---
title: Colpisci l'Insetto
layout: page
---

![Screenshot](assets/1.png)

## Obiettivo

Imparare i concetti di base di Intelligenza Artificiale e della programmazione, creando un semplice gioco in Scratch.

Puoi scaricare la versione PDF di questa attività [qui](colpisci-l-insetto.pdf).
{: .notice--info}

## Materiale necessario

- Un computer con accesso a Internet

## Istruzioni

### Fase 1: Preparazione

**🌐 Andare sul sito**: Vai su [Scratch](https://scratch.machinelearningforkids.co.uk), personalizzato per il nostro progetto. 

**Nota!** In ogni momento, puoi cambiare la lingua del sito cliccando su `⚙️ Settings` in alto a sinistra e selezionando la lingua desiderata (ad esempio `Italiano`).
{: .notice--info}

**📑 Selezionare il Template**: Clicca su `Modelli di progetto` e poi su `Shoot the bug` (colpisci l'insetto).

![Screenshot](assets/2.png)

### Fase 2: Familiarizzazione

**🕹️ Esplorare il Gioco**: Trova il blocco `quando si clicca su [bandiera verde]` 

![Screenshot](assets/3.png)   

e attacca il blocco `play manually` (gioca manualmente).   

![Screenshot](assets/4.png)

**🎮 Prova a Giocare**: Usa le frecce direzionali per mirare e premi la barra spaziatrice per sparare.

### Fase 3: Raccogliere Dati

**📝 Esempi**: Gioca diverse volte e prendi nota degli angoli e delle coordinate dove hai colpito o mancato l'insetto.

**Cosa abbiamo fatto finora?** 
Fino a questo momento, hai giocato a un gioco in Scratch.   
Ogni volta che giochi, l'insetto si sposta in una posizione casuale.  
L'obiettivo del gioco è colpire l'insetto con una pallina.  
Un ostacolo è presente, quindi è necessario far rimbalzare la pallina su una parete laterale per superarlo.    
Le coordinate dell'insetto vengono visualizzate nell'angolo in basso a sinistra dello schermo del gioco, mentre l'angolo di lancio della pallina è mostrato nell'angolo in basso a destra.
{: .notice--warning}

**Cosa faremo dopo?**
In questo progetto, vogliamo far decidere al computer a quale angolo tirare, in base alla posizione dell'insetto.     
Potresti farlo scrivendo del codice per calcolare l'angolo corretto di lancio, basandoti sulla posizione (potrai provarci a casa se vorrai).    
Tuttavia, per questo progetto, addestrerai il computer affinché *impari autonomamente* come tirare all'insetto.     
Raccoglierai esempi del gioco in azione e li utilizzerai per addestrare un modello che può prevedere se un tiro sotto un certo angolo andrà a segno o meno.
{: .notice--info}

### Fase 4: Addestramento 

#### Parte 1: Inizializzazione

**🌐 Aprire il Browser**: Vai su [machinelearningforkids.co.uk](https://machinelearningforkids.co.uk/).

![Screenshot](assets/5.png)

**🚀 Iniziare**: Clicca su `Iniziamo`.

**👀 Prova Ora**: Clicca su `Prova subito`.

**🆕 Nuovo Progetto**: Clicca sul pulsante `+ Aggiungi un nuovo progetto`.

**📛 Nominare il Progetto**: Dai un nome al progetto (ad esempio *Catturami*) e impostalo per riconoscere `numeri`.

**➕ Aggiungi un Valore**: Clicca sul bottone `ADD A VALUE`. 

![Screenshot](assets/6.png)

**🔠 Crea un valore per la coordinata 'x'**: Crea un valore numerico chiamato `x`, poi clicca su `ADD ANOTHER VALUE`.

**📐 Crea un valore per l'angolo 'angle'**: Crea un valore numerico chiamato `angle`.

**✅ Conferma**: Clicca sul pulsante `CREA`. 

![Screenshot](assets/7.png)

**🔍 Seleziona il Progetto**: Il progetto appena creato verrà aggiunto alla tua lista. Clicca su di esso.

**🛠 Prepara le Predizioni**: Clicca sul pulsante `Addestramento`. 

![Screenshot](assets/8.png)

**🏷 Etichette**: Clicca su `+ Aggiungi una nuova etichetta` e chiamalo `hit`. 
Ripeti l'azione, creando un secondo contenitore chiamato `miss`. 

![Screenshot](assets/9.png)

#### Parte 2: Implementazione in Scratch

**🔙 Torna al Progetto**: Clicca su `< Ritorna ai progetti` in alto a sinistra.

**🛠️ Avvia la Modalità di Costruzione**: Clicca su `Programma`.

**🔲 Scegli la Piattaforma**: Clicca su `Scratch 3`.

**🔓 Accedi a Scratch**: Clicca su `straight into Scratch`. 

![Screenshot](assets/10.png)

**📄 Template di Progetto**: Clicca su `Modelli di progetto` e apri nuovamente il template `shoot the bug`.

**⚙️ Configurazione Iniziale**: Connetti `play manually` al blocco `quando si clicca su [bandiera verde]`, come hai fatto in precedenza. 

![Screenshot](assets/4.png)

**🔍 Identifica il gruppo di blocchi**: Trova il gruppo di blocchi per `hit` e `miss`. 

![Screenshot](assets/11.png)

**📈 Aggiungi Dati di Addestramento a 'hit'**: Aggiungi un blocco `add training data` al gruppo di blocchi `hit`.  
*Questo aggiungerà un esempio di addestramento alle etichette `hit` ogni volta che colpisci l'insetto.*  
*Assicurati di aggiungere le nostre variabili `x` e `angle` nei posti giusti.* 

![Screenshot](assets/12.png)

**📈 Aggiungi Dati di Addestramento a 'miss'**: Aggiungi un blocco `add training data` al gruppo di blocchi `miss`.  
*Questo aggiungerà un esempio di addestramento alle etichette `miss` ogni volta che manchi l'insetto.*  
*Assicurati di aggiungere le nostre variabili `x` e `angle` nei posti giusti.* 

![Screenshot](assets/13.png)

**🎮 Test del Gioco**: Clicca sulla `Bandiera Verde` e gioca. Prova a colpire l'insetto! 

![Screenshot](assets/14.png)

**🔄 Ritorna alla Piattaforma di ML**: Nella finestra del browser ancora aperta sullo strumento di machine learning, clicca su `< Ritorna ai progetti` in alto a sinistra.

**🏋️ Addestramento del Modello**: Clicca su `Addestramento`.   
*Controlla che `x` e `angle` del tiro che hai appena fatto sia stato aggiunto agli esempi di addestramento tra le etichette corrette.*

![Screenshot](assets/15.png)

### Fase 5: Test e Miglioramento del Modello

**🔄 Ritorna a Scratch**: Gioca al gioco altre **quattordici** volte. Potrebbe essere più semplice giocare in modalità schermo intero.

**📊 Controlla gli Esempi di Addestramento**: Cerca di colpire più tiri possibili, ma non preoccuparti se ne manchi alcuni. 

![Screenshot](assets/16.png)

**🔄 Aggiorna il gruppo di blocchi**: Modifica il gruppo di blocchi `quando si clicca su [la bandiera verde]` in modo che usi `play randomly` (gioca casualmente) invece di `play manually` (gioca manualmente). 
*Usare il gioco casuale ti darà un miglior mix di di esempi e renderà più veloce e facile collezionare esempi!*

![Screenshot](assets/17.png)

**🚀 Raccogli Altri Esempi**: Clicca sulla Bandiera Verde per raccogliere altri esempi. 
Fallo almeno *trenta* volte!

![Screenshot](assets/18.png)

**🔮 Utilizza il Modello di Apprendimento**: Modifica il gruppo di blocchi `quando si clicca su [la bandiera verde]` in modo che usi `play using machine learning model` (giocan usando il modello di apprendimento automatico) invece di `play randomly` (gioca casualmente). 
 
![Screenshot](assets/19.png)

**🧠 Addestra un Nuovo Modello**: Aggiungi un blocco `formare un nuovo modello di apprendimento automatico` al blocco `quando si clicca su [la bandiera verde]`. 

![Screenshot](assets/20.png)

**🔍 Trova il gruppo di blocchi di Scelta Direzione**: Trova il gruppo di blocchi `choose direction using machine learning` (scegli la direzione usi il machine learning). 

![Screenshot](assets/21.png)

**🔄 Aggiorna il gruppo di blocchi per Utilizzare il Tuo Modello**: Modifica il gruppo di blocchi per utilizzare il tuo modello di machine learning.  
*In questo modo il computer deciderà casualmente a che angolo tirare, ma sceglierà questo angolo solo se il modello di machine learning prevede che il tiro andrà a segno (hit).*

![Screenshot](assets/22.png)

**🕵️ Valuta l'Efficacia del Tuo Modello**: Prova qualche tiro!   
Quanto è efficace il tuo modello di machine learning nel scegliere gli angoli che colpiranno l'insetto? **Tanto**, **poco** o **per niente**?

**Cosa hai fatto finora?** Hai iniziato ad addestrare un computer per giocare a un gioco.   
Invece di scrivere regole per farlo o calcolare l'equazione per determinare l'angolo di lancio della palla, lo stai facendo raccogliendo esempi.   
Questi esempi sono utilizzati per addestrare una Intelligenza Artificiale.  
Il computer imparerà dagli esempi. 
Utilizzerà questi per fare previsioni se una posizione e un angolo porteranno a un colpo andato a segno o a un errore.  
Poiché hai ancora i blocchi `add training data` (aggiungi dati di addestramento) nel tuo gruppo di blocchi `hit` e `miss`, stai ancora raccogliendo ulteriori esempi di addestramento ogni volta che giochi.   
Questo significa che più tempo permetterai al tuo modello di Intelligenza Artificiale di giocare al gioco, più diventerà abile nel farlo!!
{: .notice--warning}

### Fase 6: Comprensione del Comportamento del Modello di Apprendimento Automatico

> **Nota**: Questa sezione è **avanzata** poiché richiede una conoscenza profonda dei concetti di coordinata e angolo. Se te la senti vai avanti oppure passa alla sezione 

**📊 Analisi degli Errori del Modello**: Quante volte il tuo modello di apprendimento automatico sta sbagliando (ad esempio su 10 tiri)? Se sbaglia troppo spesso (numero di errori maggiore di 7), potrebbe essere perché non hai fornito abbastanza esempi di colpi andati a segno.   
Cambia il gioco in modalità manuale (gioca manualmente) e usa nuovamente i tasti freccia.   
Raccogli almeno altri **dieci** colpi andati a segno.
Poi, torna alla modalità di gioco con il modello di apprendimento automatico e verifica se è migliorato.

**🎯 Raccolta di Esempi di Addestramento**: Continua a raccogliere esempi di addestramento fino a quando il tuo modello di apprendimento automatico non inizia a migliorare nel gioco.   
*Di quanti esempi ha avuto bisogno il tuo modello? (il mio ha avuto bisogno di più di 100 esempi...)* 

![Screenshot](assets/23.png)

**🔄 Navigazione al Progetto**: Fai clic su `< Ritorna ai progetti`.

**📚 Apprendimento e Test**: Fai clic su `Impara & Testa`. 

![Screenshot](assets/24.png)

**🔍 Descrizione del Modello**: Fai clic su `Describe your model!`.   
Questa pagina ti mostrerà un'immagine del tuo modello di apprendimento automatico.   
Leggi la pagina per capire cosa significa.   
Prova a inserire valori per la coordinata `x` e un `angle` di tiro, poi fai clic su `Prova` per vedere come il tuo modello di apprendimento automatico fa una previsione su cosa accadrà. 

![Screenshot](assets/25.png)

**🔮 Verifica delle Previsioni**: Utilizza questa visualizzazione e il gioco in Scratch in modalità manuale per vedere quali previsioni sta facendo il tuo modello di apprendimento automatico e se sono corrette.

**Cosa Hai Fatto Finora?** In questa fase, hai addestrato un modello di apprendimento automatico noto come `albero decisionale classificatore` (*decision tree classifier*).   
La visualizzazione ti consente di comprendere come il tuo modello effettua previsioni.   
È un modo efficace per osservare quali schemi il computer ha individuato nei dati di addestramento che hai raccolto.
{: .notice--warning}

#### È un Buon Utilizzo dell'Apprendimento Automatico?

Riflettiamo sulle applicazioni appropriate dell'apprendimento automatico. Utilizziamo questa tecnologia quando desideriamo che i computer eseguano compiti troppo complicati per essere descritti da istruzioni esplicite.

Evitiamo l'apprendimento automatico quando il tempo necessario per raccogliere esempi di addestramento supera quello per scrivere direttamente le istruzioni per il compito.

Confronta lo sforzo impiegato per raccogliere gli esempi di addestramento con lo sforzo che avrebbe richiesto calcolare l'angolo di tiro. Pensi che questo gioco sia un buon uso dell'apprendimento automatico?

![Screenshot](assets/26.png)

E se il gioco fosse reso più difficile? Ad esempio, se ci fossero più ostacoli o se l'insetto potesse apparire a diverse altezze? Queste complicazioni renderebbero le equazioni per calcolare l'angolo di tiro molto più intricate.

Questo renderebbe l'apprendimento automatico un'opzione più conveniente per gestire il gioco, sebbene richiederebbe probabilmente più esempi di addestramento data la maggiore complessità del compito.

(Puoi provare a casa a implementare questi miglioramenti e vedere di persona se questo è il caso!)

---

### Fase 7: Idee ed Estensioni

Ora che hai completato il progetto, perché non provare una di queste idee, o magari crearne una tutta tua?

#### Aggiungi Ostacoli Supplementari

Rendi il gioco più impegnativo inserendo ulteriori ostacoli sullo schermo di gioco.  
Dovrai aggiornare il gruppo di blocchi `start moving` in modo che la palla sappia come rimbalzare sui nuovi ostacoli.

#### Utilizza le Coordinate x e y

Per ridurre la quantità di addestramento necessario, abbiamo utilizzato solo una coordinata (coordinata x) permettendo all'insetto di muoversi solo da sinistra a destra.  
Prova a rifare il progetto consentendo all'insetto di spostarsi anche in altezza (posizione y).   
Dovrai aggiungere un nuovo valore numerico per memorizzare questa coordinate quando crei il progetto di apprendimento automatico.

#### Rendilo Competitivo!

Prova ad aggiungere una variabile per tenere il punteggio e vedere se il tuo modello di apprendimento automatico può ottenere un punteggio più alto del tuo.

---

## Licenza

Questo foglio di progetto è distribuito sotto licenza `Creative Commons Attribution Non-Commercial Share-Alike` ([CC BY-NC-SA 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/)).

