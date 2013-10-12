(function (BEM, undefined) {

    BEM.DOM.decl('b-page', {

        onSetMod: {
            js: function () {
                var self = this;
                self._btn = self.findBlockInside('button_type_trigger');
                self._btn.on('click', function(e){
                    self._btn.delMod('mode');
                    self._btn.setMod('mode', 'hidden');
                    return false;
                });
            }
        }

    });

})(BEM);