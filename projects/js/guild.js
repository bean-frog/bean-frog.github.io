const outcomeMap = { //  'Attacker-Victim': 'Outcome',
    'Oxford-Oxford': 'Victim respawns in 24 hours',
    'Oxford-Evasive': 'Evasive shield DOES NOT negate death.',
    'Oxford-Poison': 'Normal death',
    'Oxford-Troll': 'Normal death',
    'Oxford-Battery': 'Attacker becomes Supercharged, If Battery shield has not been used that game, Victim does not die',
    'Oxford-Radioactive': 'Radioactive dies, Oxford gets "Radiation Sickness" for one week (same as being a Poison)',
    'Oxford-Solar': 'Normal death',
    'Oxford-Electromagnet': '',
    'Oxford-Classic': 'Normal Death',
    'Oxford-Overkill': 'Normal Death',
    'Oxford-Stealth': 'Normal Death',
    'Oxford-Supercharged': 'Normal Death',
    
    'Evasive-Oxford': 'Invalid, Evasive cannot pin',
    'Evasive-Evasive': 'Invalid, Evasive cannot pin',
    'Evasive-Poison': 'Invalid, Evasive cannot pin',
    'Evasive-Troll': 'Invalid, Evasive cannot pin',
    'Evasive-Battery': 'Invalid, Evasive cannot pin',
    'Evasive-Radioactive': 'Invalid, Evasive cannot pin',
    'Evasive-Solar': 'Invalid, Evasive cannot pin',
    'Evasive-Electromagnet': 'Invalid, Evasive cannot pin',
    'Evasive-Classic': 'Invalid, Evasive cannot pin',
    'Evasive-Overkill': 'Invalid, Evasive cannot pin',
    'Evasive-Stealth': 'Invalid, Evasive cannot pin',
    'Evasive-Supercharged': 'Invalid, Evasive cannot pin',
    
    'Poison-Oxford': 'Oxford is poisoned and will die after 2 days (can still pin, be pinned etc)',
    'Poison-Evasive': 'Evasive shield negates death after the 2 day poison timer ends',
    'Poison-Poison': 'Victim is poisoned and will die after 2 days',
    'Poison-Troll': 'Victim is poisoned and will die after 2 days',
    'Poison-Battery': 'Attacker becomes Supercharged, Battery shield negates if available, Battery is poisoned and will die after 2 days if not',
    'Poison-Radioactive': 'Radioactive is poisoned and will die after 2 days',
    'Poison-Solar': 'Solar is poisoned and will die after 2 days',
    'Poison-Electromagnet': 'Electromagnet is poisoned and will die after 2 days',
    'Poison-Classic': 'Classic is poisoned and will die after 2 days',
    'Poison-Overkill': 'Overkill is poisoned and will die after 2 days',
    'Poison-Stealth': 'Stealth is poisoned and will die after 2 days',
    'Poison-Supercharged': 'Supercharged is poisoned and will die after 2 days',
    
    'Troll-Oxford': 'Victim is trolled ',
    'Troll-Evasive': 'Victim is trolled, shield DOES NOT negate',
    'Troll-Poison': 'Victim is trolled',
    'Troll-Troll': 'Victim is trolled',
    'Troll-Battery': 'Victim is trolled, Battery shield negates if available,',
    'Troll-Radioactive': 'Victim is trolled, Troll recieves radiation sickness for one week',
    'Troll-Solar': 'Victim is trolled',
    'Troll-Electromagnet': 'Victim is trolled',
    'Troll-Classic': 'Victim is trolled',
    'Troll-Overkill': 'Victim is trolled',
    'Troll-Stealth': 'Victim is trolled',
    'Troll-Supercharged': 'Victim is trolled',
    
    'Battery-Oxford': 'Normal Death',
    'Battery-Evasive': 'Shield negates death if available. If shield negates, attacker has immunity for the rest of the day.',
    'Battery-Poison': 'Normal Death',
    'Battery-Troll': 'Normal Death',
    'Battery-Battery': 'Attacker becomes Supercharged',
    'Battery-Radioactive': 'Battery recieves radiation sickness for one week',
    'Battery-Solar': 'Normal Death',
    'Battery-Electromagnet': 'Normal Death',
    'Battery-Classic': 'Normal Death',
    'Battery-Overkill': 'Normal Death',
    'Battery-Stealth': 'Normal Death',
    'Battery-Supercharged': 'Normal Death',
    
    'Radioactive-Oxford': 'Both Die',
    'Radioactive-Evasive': 'Radioactive dies, Evasive dies if shield has been used',
    'Radioactive-Poison': 'Both Die',
    'Radioactive-Troll': 'Both Die',
    'Radioactive-Battery': 'Radioactive dies, Battery dies if shield has been used',
    'Radioactive-Radioactive': 'Both Die',
    'Radioactive-Solar': 'Both Die',
    'Radioactive-Electromagnet': 'Both Die',
    'Radioactive-Classic': 'Both Die',
    'Radioactive-Overkill': 'Both Die',
    'Radioactive-Stealth': 'Both Die',
    'Radioactive-Supercharged': 'Both Die',
    
    'Solar-Oxford': 'Oxford dies',
    'Solar-Evasive': 'Evasive shield negates if available',
    'Solar-Poison': 'Poison Dies',
    'Solar-Troll': 'Troll Dies',
    'Solar-Battery': 'Battery shield negates if available, Solar gains charge instead of becoming Supercharged',
    'Solar-Radioactive': 'Radioactive dies, Solar gets radiation sickness for one week',
    'Solar-Solar': 'Victim Dies',
    'Solar-Electromagnet': 'Electromagnet Dies',
    'Solar-Classic': 'Classic dies',
    'Solar-Overkill': 'Overkill Dies',
    'Solar-Stealth': 'Stealth Dies',
    'Solar-Supercharged': 'Supercharged Dies',
    
    'Electromagnet-Oxford': 'Electromagnet is assigned a new target class, Oxford dies',
    'Electromagnet-Evasive': 'Electromagnet is assigned a new target class, Evasive shield negates if available',
    'Electromagnet-Poison': 'Electromagnet is assigned a new target class, Poison Dies',
    'Electromagnet-Troll': 'Electromagnet is assigned a new target class, Troll dies',
    'Electromagnet-Battery': 'Electromagnet becomes Supercharged, Battery shield negates if available',
    'Electromagnet-Radioactive': 'Electromagnet is assigned a new target class and is given radiation sickness for one week, Radioactive dies',
    'Electromagnet-Solar': 'Electromagnet is assigned a new target class, Solar dies',
    'Electromagnet-Electromagnet': 'attacker is assigned a new target class, victim dies',
    'Electromagnet-Classic': 'Electromagnet is assigned a new target class, Classic dies',
    'Electromagnet-Overkill': 'Electromagnet is assigned a new target class, Overkill Dies',
    'Electromagnet-Stealth': 'Electromagnet is assigned a new target class, Stealth Dies',
    'Electromagnet-Supercharged': 'Electromagnet is assigned a new target class, Supercharged Dies',
    
    'Classic-Oxford': 'Oxford dies',
    'Classic-Evasive': 'Evasive shield negates if available',
    'Classic-Poison': 'Poison Dies',
    'Classic-Troll': 'Troll dies',
    'Classic-Battery': 'Battery shield negates if available',
    'Classic-Radioactive': 'Classic is given radiation sickness for one week, Radioactive dies',
    'Classic-Solar': 'Solar dies',
    'Classic-Electromagnet': 'Electromagnet Dies',
    'Classic-Classic': 'Victim Dies',
    'Classic-Overkill': 'Overkill Dies',
    'Classic-Stealth': 'Stealth Dies',
    'Classic-Supercharged': 'Supercharged Dies',
    
    'Overkill-Oxford': 'Oxford dies',
    'Overkill-Evasive': 'Evasive shield negates if available',
    'Overkill-Poison': 'Poison Dies',
    'Overkill-Troll': 'Troll dies',
    'Overkill-Battery': 'Battery shield negates if available',
    'Overkill-Radioactive': 'Overkill is given radiation sickness for one week, Radioactive dies',
    'Overkill-Solar': 'Solar dies',
    'Overkill-Electromagnet': 'Electromagnet Dies',
    'Overkill-Classic': 'Classic Dies',
    'Overkill-Overkill': 'Victim Dies',
    'Overkill-Stealth': 'Stealth Dies',
    'Overkill-Supercharged': 'Supercharged Dies',
    
    'Stealth-Oxford': 'Oxford dies',
    'Stealth-Evasive': 'Evasive shield negates if available',
    'Stealth-Poison': 'Poison Dies',
    'Stealth-Troll': 'Troll dies',
    'Stealth-Battery': 'Battery shield negates if available',
    'Stealth-Radioactive': 'Overkill is given radiation sickness for one week, Radioactive dies',
    'Stealth-Solar': 'Solar dies',
    'Stealth-Electromagnet': 'Electromagnet Dies',
    'Stealth-Classic': 'Classic Dies',
    'Stealth-Overkill': 'Overkill Dies',
    'Stealth-Stealth': 'Victim Dies',
    'Stealth-Supercharged': 'Supercharged Dies',
    
    'Supercharged-Oxford': 'Oxford dies',
    'Supercharged-Evasive': 'Evasive shield negates if available',
    'Supercharged-Poison': 'Poison Dies',
    'Supercharged-Troll': 'Troll dies',
    'Supercharged-Battery': 'Battery shield negates if available',
    'Supercharged-Radioactive': 'Supercharged is given radiation sickness for one week, Radioactive dies',
    'Supercharged-Solar': 'Solar dies',
    'Supercharged-Electromagnet': 'Electromagnet Dies',
    'Supercharged-Classic': 'Classic Dies',
    'Supercharged-Overkill': 'Overkill Dies',
    'Supercharged-Stealth': 'Stealth Dies',
    'Supercharged-Supercharged': 'Victim Dies',
      };
      
      const attackerSel = document.querySelector('#attackerSel');
      const victimSel = document.querySelector('#victimSel');
      const outcomeEle = document.querySelector('#outcome');
      
      function checkSelection() {
        const attackerClass = attackerSel.value;
        const victimClass = victimSel.value;
        outcomeEle.textContent = outcomeMap[attackerClass + '-' + victimClass] || 'Invalid';
      }
      
      attackerSel.addEventListener('change', checkSelection);
      victimSel.addEventListener('change', checkSelection);
    
      function troll(arr) {
        var index = Math.floor(Math.random() * arr.length);
        return arr[index];
      }
      var arr = ['Oxford', 'Evasive', 'Poison', 'Battery', 'Radioactive', 'Solar', 'Electromagnet', "Classic", "Overkill", "Stealth", "Supercharged", "Troll" ];
      var newClass = troll(arr);
      var button = document.querySelector('#randomTroll');
      button.addEventListener('click', function() {
        var newClass = troll(arr);
        document.querySelector('#newClass').innerHTML = newClass
      });