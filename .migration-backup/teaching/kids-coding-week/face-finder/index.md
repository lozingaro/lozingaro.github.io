---
title: Anima il tuo viso
layout: page
---

![Screenshot](assets/1.png)

## Obiettivo

L'obiettivo di questo progetto è creare un filtro per il viso alimentato da intelligenza artificiale che aggiunge occhi da cartone animato al tuo viso.  
Utilizzerai un modello di apprendimento automatico pre-addestrato per eseguire il rilevamento del viso su un video della webcam in tempo reale e codificare effetti animati utilizzando i risultati.

Puoi scaricare la versione PDF di questa attività [qui](anima-viso.pdf), mentre il codice per Scratch [qui](anima-viso.sb3).
{: .notice--info}

## Materiale necessario

- Una webcam  
- Un computer con accesso a internet

## Istruzioni

### Fase 1: Preparazione

**🌐 Andare sul sito**: Vai su [machinelearningforkids](https://machinelearningforkids.co.uk/pretrained) nel tuo browser web.  
Questo sito mostra alcuni dei modelli di apprendimento automatico pre-addestrati che sono disponibili per te.  
Per questo progetto, utilizzeremo il modello di rilevamento del viso.

**Nota!** In ogni momento, puoi cambiare la lingua del sito cliccando su `⚙️ Settings` in alto a sinistra e selezionando la lingua desiderata (ad esempio `Italiano`).
{: .notice--info}

**🖱️ Cliccare su 'Inizia'**: Clicca sul pulsante "Iniziamo".  

**🔵 Aprire la finestra delle estensioni**: Clicca sul pulsante viola con l'icona più in basso a sinistra.

![Screenshot](assets/2.png)

**📹 Selezionare l'estensione di rilevamento del video**: Avrai bisogno dell'estensione `Movimento webcam` per utilizzare la webcam nel tuo progetto.

**📹 Selezionare l'estensione di rilevamento del volto**: Avrai bisogno anche dell'estensione `Face detection` per permettere al computer di trovare il volto nella webcam. Quindi riapri la finestra delle estensioni e seleziona `Face detection`.

**🗑️ Eliminare lo sprite del gatto**: Clicca sull'icona del cestino. 

![Screenshot](assets/3.png)

**🎨 Creare un nuovo sprite**: Utilizza il pulsante del pennello per creare un nuovo sprite.  

![Screenshot](assets/4.png)

**👁️ Disegnare un occhio da cartone animato**: Nella scheda Costume, puoi disegnarlo a mano libera o utilizzare lo strumento cerchio per disegnare due cerchi se preferisci qualcosa di più semplice.

![Screenshot](assets/5.png)

**🎯 Centrare l'occhio**: Trascina il tuo occhio in modo che il centro corrisponda alle croci centrali dello sprite.  
Dovresti notare che salta nel posto giusto quando ti avvicini.

![Screenshot](assets/6.png)

**👁️👁️ Duplicare lo sprite dell'occhio**: Fai clic con il pulsante destro del mouse sullo sprite e poi clicca su `Duplica`.

![Screenshot](assets/7.png)

**🏷️ Rinominare gli sprite**: Nominare i tuoi due sprite `left eye`(occhio sinistro) e `right eye` (occhio destro).

![Screenshot](assets/8.png)

**🎨 Utilizzare nuovamente il pulsante di pittura**: Per disegnare un naso da cartone animato come sprite e chiamarlo `nose` (naso).

![Screenshot](assets/9.png)

**🎭 Torna al programma**: Clicca sullo `Stage` e poi clicca sulla scheda `Codice`.

![Screenshot](assets/10.png)

### Fase 2: Scriviamo il codice

**📜 Creare questo script per abilitare la webcam**: (Qui inseriremo il codice Scratch tradotto).

![Screenshot](assets/11.png)

**🎥 Avviare la webcam**: Clicca sulla bandiera verde per iniziare a utilizzare la webcam.  
Dovresti vedere un riquadro video in alto a destra dello schermo.

**👁️ Posizionare gli occhi**: Utilizza gli sprite degli occhi per posizionarli correttamente sul tuo viso nel video.  
Puoi trascinarli direttamente e usare la `Dimensione` nella scheda `Costumi` per ingrandirli o rimpicciolirli.

![Screenshot](assets/12.png)

**👃 Posizionare il naso**: Posiziona il naso sul tuo viso nel video.

**📜 Creare il gruppo di blocchi per l'occhio sinistro**: Clicca su `left eye` e crea il seguente gruppo di blocchi.

![Screenshot](assets/13.png)

**📜 Creare il gruppo di blocchi per l'occhio destro**: Clicca su `right eye` e crea il seguente gruppo di blocchi.

![Screenshot](assets/14.png)

**📜 Creare il gruppo di blocchi per il naso**: Clicca su `nose` e crea il seguente gruppo di blocchi.

![Screenshot](assets/15.png)

### Fase 3: Testare il codice

**📝 Testare il codice**: Clicca sulla bandiera verde per testare il codice.

**Cosa abbiamo fatto finora?**   
🤔 *Riflessione*: Questo progetto utilizza un modello di apprendimento automatico pre-addestrato per rilevare i volti. Pensa a come questo potrebbe essere un buon o cattivo utilizzo dell'apprendimento automatico.  
📚 *Contesto sul Modello Pre-Addestrato*: Il modello di apprendimento automatico utilizzato in questo progetto è stato addestrato su oltre 32.000 foto raccolte da accademici presso un'università.
Queste foto sono state analizzate per individuare la posizione dei 390.000 volti in esse contenuti.
Questi esempi sono stati utilizzati per addestrare il modello a riconoscere i volti nelle foto.
L'utilizzo di modelli pre-addestrati è una pratica comune nei progetti di apprendimento automatico del mondo reale, specialmente quando non si dispone del tempo per raccogliere propri dati di addestramento.
{: .notice--warning}

### Fase 4: Personalizzare e miglioriamo il progetto

**📏 Aggiornare la Dimensione degli Sprite**: Questo aggiornamento cambierà la dimensione dei tuoi sprite in base alla dimensione del tuo viso.  
Diventeranno più grandi se avvicini il tuo viso alla webcam.  
Aggiungi questi blocchi di codice ai tre elementi: 

1. `left eye`

![Screenshot](assets/16.png)

2. `right eye` 

![Screenshot](assets/17.png)

3. `nose`

![Screenshot](assets/18.png)

<!-- aggiungi istruzione per una possibile variante con un fattore moltiplicativo -->
**📏 Aggiornare la Dimensione degli Sprite (variante)**: Questo aggiornamento cambierà la dimensione dei tuoi sprite in base alla dimensione del tuo viso.

### Fase 5: Comprensione del Comportamento del Modello

#### È un Buon Utilizzo dell'Apprendimento Automatico?

**🤔 Riflessione**: Questo progetto utilizza un modello di apprendimento automatico pre-addestrato per rilevare i volti.  
Pensa a come questo potrebbe essere un buon o cattivo utilizzo dell'apprendimento automatico.

**🔍 Dettagli Tecnici**: Hai creato un progetto Scratch utilizzando una tecnica di apprendimento automatico nota come rilevamento del viso.  
Ci sono due fasi in questo processo:  
1. **Rilevamento dell'oggetto**: Trova la parte della foto che sembra contenere un viso.  
2. **Predizione della forma**: Prevede dove gli occhi, il naso e la bocca sono più probabili da trovarsi nella casella disegnata nella prima fase.  
Questo è talvolta descritto come rilevamento di "punti di riferimento del viso".

**🌐 Applicazioni nel Mondo Reale**: Ciò che stai facendo non è "riconoscimento facciale".  
Il tuo progetto non sta riconoscendo di chi sia il viso nella foto.  
Il modello pre-addestrato che stai utilizzando non è stato addestrato con foto di una persona particolare.  
Sta solo cercando qualcosa che assomigli a un volto umano.  
Il "rilevamento del viso" è una capacità utile.  
Potresti aver visto app mobili utilizzare filtri video per il viso per aggiungere effetti divertenti ai video, come hai fatto in questo progetto.  
Altri usi nel mondo reale includono la possibilità di sfocare automaticamente i volti delle persone nelle foto quando non si ha il permesso di pubblicare i loro volti, o contare automaticamente il numero di persone che una videocamera può vedere.

---

### Licenza

Questo foglio di progetto è distribuito sotto licenza `Creative Commons Attribution Non-Commercial Share-Alike` ([CC BY-NC-SA 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/)).

