<div class="container">
    <div class="row mt-5">
        <div class="col-md-8 offset-2">
            <form action="" method="post">
                <div class="form-group">
                    <label for="">categories</label>
                    <select name="category" id="category_field" class="form-control">
                        <option value="disabled">Selectionnez une categorie</option>
                        <?php foreach($categories as $c): ?>
                        <option value="<?=$c['id'] ?>"><?=$c['name'] ?></option>
                        <?php endforeach ?>
                    </select>
                </div>
                <div class="form-group">
                    <label for="">Votre choix</label>
                    <select name="choice" id="choice_field" class="form-control" disabled></select>
                </div>
                <div class="justify-content-end d-flex">
                    <button type="submit" class="btn btn-primary form-control">Valider</button>
                </div>
            </form>
        </div>
    </div>
</div>
